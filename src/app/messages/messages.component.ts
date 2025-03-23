import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe, NgIf, DatePipe } from '@angular/common';
import { loadMessages, sendMessage } from '../store/message.action';
import { selectMessages, selectLoading } from '../store/messages.selectors';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../messages-dialog/message-dialog/message-dialog.component';
import { Observable, startWith } from 'rxjs';
import { Message } from '../store/messages.reducer';
import { MatButtonModule } from '@angular/material/button';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AsyncPipe,
    NgIf,
    DatePipe,
  ],
  templateUrl: './messages.component.html',
})
export class MessagesComponent implements OnInit {
  private store = inject(Store);
  constructor(private dialog: MatDialog) {}

  messages$ = this.store.select(selectMessages);
  loading$ = this.store.select(selectLoading);

  // Define the columns to display in the table
  displayedColumns: string[] = ['id', 'email', 'message', 'date'];

  ngOnInit(): void {
    this.store.dispatch(loadMessages());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '250px', 
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(sendMessage({ email: result.email, message: result.message }));
      }
    });
  }
}