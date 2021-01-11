import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
      <button routerLink="/">Quiz</button>
      <span style="flex: 1 1 auto"></span>
      <button routerLink="/register">Register</button>
      <button routerLink="/login">Login</button>
    </mat-toolbar>
  `,
  styleUrls: ['./app.component.css'],
})
export class NavComponent {}
