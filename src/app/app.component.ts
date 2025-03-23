import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  template: `
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}