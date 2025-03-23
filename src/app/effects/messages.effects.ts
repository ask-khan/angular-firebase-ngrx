import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs'; // Import 'from' from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators';
import { Firestore, addDoc, collection, getDocs } from '@angular/fire/firestore';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure, sendMessage, sendMessageSuccess, sendMessageFailure } from '../store/message.action';

@Injectable()
export class MessagesEffects {
    actions$ = inject(Actions);
    firestore = inject(Firestore);

    loadMessages$ = createEffect(() =>
        this.actions$.pipe(
        ofType(loadMessages),
        switchMap(() =>
            from(getDocs(collection(this.firestore, 'messages'))).pipe(
            map((snapshot) =>
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
            ),
            map((messages) => loadMessagesSuccess({ messages })),
            catchError((error) => of(loadMessagesFailure({ error }))),
            ),
        ),
        ),
    );

    sendMessage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(sendMessage),
            switchMap((action) =>
                from(
                    addDoc(collection(this.firestore, 'messages'), {
                        email: action.email,
                        message: action.message,
                        date: new Date(),
                    }),
                ).pipe(
                    map(() => sendMessageSuccess()),
                    switchMap(() => of(loadMessages())),
                    catchError((error) => of(sendMessageFailure({ error }))),
                ),
            ),
        ),
    );
}