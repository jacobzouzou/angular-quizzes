import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
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

  constructor(private httpClient: HttpClient, private router:Router) {
    //constructor
  }
  /* QUESTIONS*/
  getQuestions(quizId: number) {
    return this.httpClient.get(`http://localhost:5000/api/quizzes/${quizId}/questions`);
  }
  getQuestion(quizId: number, questionId:number) {
    return this.httpClient.get(`http://localhost:5000/api/quizzes/${quizId}/questions/${questionId}`);
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
    // this.router.navigate(['quizzes',question.quizId, 'questions',question.id]);
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
