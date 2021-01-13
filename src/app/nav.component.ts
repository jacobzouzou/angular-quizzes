import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service"

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
      <button routerLink="/">My Quiz</button>
      <button routerLink="/play">Play</button>
      <span style="flex: 1 1 auto"></span>
      <button   *ngIf="!isAuthenticated" routerLink="/register">Register</button>
      <button  *ngIf="!isAuthenticated" routerLink="/login">Login</button>
      <button *ngIf="isAuthenticated" (click)="logout()">Logout</button>
    </mat-toolbar>
  `,
  styleUrls: ['./app.component.css'],
})
export class NavComponent {

  constructor(private auth:AuthService){

  }
  get isAuthenticated(){
    return this.auth.isAuthenticated;
  }
  logout(){
    this.auth.logout();
  }
}
