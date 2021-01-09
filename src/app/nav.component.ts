import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
    <button routerLink="/">Home</button>
    <button routerLink="/question">Question</button>
      <button routerLink="/questions">Question List</button>
      </mat-toolbar>
  `,
  styleUrls: ['./app.component.css']
})
export class NavComponent {
}
