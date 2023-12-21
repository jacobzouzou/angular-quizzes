import { Component } from '@angular/core';
import { ApiService } from '../../services/quiz.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent {
  quiz: any = {};

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.selectedQuiz.asObservable().subscribe((quiz) => (this.quiz = quiz));
  }

  postQuiz(quiz: any) {
    this.api.postQuiz(quiz).subscribe(() => {
      window.location.reload();
    });
  }
  
  putQuiz(quiz: any) {
    this.api.putQuiz(quiz).subscribe(() => {
      window.location.reload();
    });
  }
}
