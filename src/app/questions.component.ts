import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent {
  api: ApiService;
  question = {};
  questions: any;
  constructor(private apiService: ApiService) {
    //constructor
    this.api = apiService;
  }
  ngOnInit() {
    this.api.getQuestions().subscribe((res) => (this.questions = res));
  }
  public post(question: any) {
    this.api.postQuestion(question);
  }
}
