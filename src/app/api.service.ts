import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//library for observable pattern: subject , observer
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {
  private selectedQuestion = new Subject<any>();
  questionSelected= this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected= this.selectedQuiz.asObservable();

  constructor(private httpClient: HttpClient) {
    //constructor
  }
  /* QUESTIONS*/
  getQuestions() {
    return this.httpClient.get('http://localhost:5000/api/questions');
  }
  postQuestion(question: any) {
    this.httpClient
      .post('http://localhost:5000/api/questions', question)
      .subscribe((res) => {
        console.log(res);
      });
  }
  putQuestion(question: any) {
    this.httpClient
      .put(`http://localhost:5000/api/questions/${question.id}`, question)
      .subscribe((res) => {
        console.log(res);
      });
  }
  selectQuestion(question:any){
    //Subject notify observer with pasted value
    this.selectedQuestion.next(question);
  }
  /* QUIZZES*/
  getQuizzes() {
    return this.httpClient.get('http://localhost:5000/api/quizzes');
  }
  postQuiz(quiz: any) {
    this.httpClient
      .post('http://localhost:5000/api/quizzes', quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }
  putQuiz(quiz: any) {
    this.httpClient
      .put(`http://localhost:5000/api/quizzes/${quiz.id}`, quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }
  selectQuiz(quiz:any){
    //Subject notify observer with pasted value
    this.selectedQuiz.next(quiz);
  }
}
