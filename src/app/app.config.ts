import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { messagesReducer } from './store/messages.reducer';
import { MessagesEffects } from './effects/messages.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ messages: messagesReducer }),
    provideEffects([MessagesEffects]),
    provideFirebaseApp(() => {
      try {
        return getApp(); // Return the existing app if it exists
      } catch (e) {
        return initializeApp(environment.firebase); // Initialize Firebase if it doesn't exist
      }
    }),
    provideFirestore(() => getFirestore()),
  ],
};