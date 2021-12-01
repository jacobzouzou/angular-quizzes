import { Component } from '@angular/core';
import { ApiService } from '../../services/quiz.service';
import {Router} from "@angular/router"

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html',
})
export class QuizzesComponent {
  quiz = {};
  quizzes: any;

  constructor(public api: ApiService, private router:Router) { }
  ngOnInit() {
    this.api.getQuizzes().subscribe((res) => (this.quizzes = res));
  }
  public post(quiz: any) {
    this.api.selectQuiz(quiz);
  }
}
