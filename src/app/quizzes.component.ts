import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html',
})
export class QuizzesComponent {
  api: ApiService;
  quiz = {};
  quizzes: any;

  constructor(private apiService: ApiService) {
    //constructor
    this.api = apiService;
  }
  ngOnInit() {
    this.api.getQuizzes().subscribe((res) => (this.quizzes = res));
  }
//   public post(quiz: any) {
//     this.api.postQuiz(quiz);
//   }
}
