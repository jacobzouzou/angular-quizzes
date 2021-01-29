import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    template: `
    <h1>Your Score</h1> 
    <h2>{{score.correct}}/{{score.total}}</h2>
  `
})
export class FinishedComponent {
    score:any;
    constructor(@Inject (MAT_DIALOG_DATA) private data:any) {
      this.score=data;
    }
}
