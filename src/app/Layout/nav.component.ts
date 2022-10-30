import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'nav',
  template: `
    <button mat-button routerLink="/">Quiz</button>
    <button mat-button routerLink="/play">Play</button>
    <span style="flex: 1 1 auto"></span>
    <button *ngIf="!isRegistered && !isAuthenticated" mat-button routerLink="/register">
      Register
    </button>
    <button *ngIf="isRegistered && !isAuthenticated" mat-button routerLink="/login">
      Login
    </button>
    <button *ngIf="isAuthenticated" mat-button (click)="logout()">
      Logout 
    </button>
  `,
  // template: `
  //   <mat-toolbar>
  //     <button routerLink="/">Quiz</button>
  //     <button routerLink="/play">Play</button>
  //     <span style="flex: 1 1 auto"></span>
  //     <button *ngIf="!isRegistered && !isAuthenticated" routerLink="/register">Register</button>
  //     <button *ngIf="isRegistered && !isAuthenticated" routerLink="/login">Login</button>
  //     <button *ngIf="isAuthenticated" (click)="logout()">Logout</button>
  //   </mat-toolbar>
  // `,
  styleUrls: ['../app.component.css'],
})
export class NavComponent {
  constructor(private auth: AuthService) {}
  get isAuthenticated() {
    return this.auth.isAuthenticated;
  }
  get isRegistered() {
    return this.auth.isRegistered;
  }
  logout() {
    this.auth.logout();
  }
}
