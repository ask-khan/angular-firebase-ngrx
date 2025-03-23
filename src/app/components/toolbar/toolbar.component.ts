import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/">Home</a>
      <a mat-button routerLink="/messages">Messages</a>
    </mat-toolbar>
  `,
})
export class ToolbarComponent {}