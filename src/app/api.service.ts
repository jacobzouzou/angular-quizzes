import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//library for observable pattern: subject , observer
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {
  private selectedQuestion = new Subject<any>();
  questionSelected= this.selectedQuestion.asObservable();

  constructor(private httpClient: HttpClient) {
    //constructor
  }
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

  selectQuestion(question:any){
    this.selectedQuestion.next(question);
  }
}
