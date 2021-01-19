import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//library for observable pattern: subject , observer
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private httpClient: HttpClient) {
    //constructor
  }
  /* QUESTIONS*/
  getQuestions(quizId: number) {
    return this.httpClient.get(`http://localhost:5000/api/questions/${quizId}`);
  }
  postQuestion(question: any) {
    return this.httpClient
      .post('http://localhost:5000/api/questions', question);
  }
  putQuestion(question: any) {
     return this.httpClient
      .put(`http://localhost:5000/api/questions/${question.id}`, question);
  }
  selectQuestion(question: any) {
    //Subject notify observer with pasted value
    this.selectedQuestion.next(question);
  }
  /* QUIZZES*/
  getQuizzes() {
    return this.httpClient.get('http://localhost:5000/api/quizzes');
  }
  getAllQuizzes() {
    return this.httpClient.get('http://localhost:5000/api/quizzes/all');
  }
  postQuiz(quiz: any) {
    return this.httpClient.post('http://localhost:5000/api/quizzes', quiz);
  }
  putQuiz(quiz: any) {
    return this.httpClient.put(
      `http://localhost:5000/api/quizzes/${quiz.id}`,
      quiz
    );
  }
  selectQuiz(quiz: any) {
    //Subject notify observer with pasted value
    this.selectedQuiz.next(quiz);
  }
}
