import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent {
  api: ApiService;
  question = {};
  questions: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    //constructor
    this.api = apiService;
  }
  ngOnInit() {
    var quizId= this.route.snapshot.paramMap.get("quizId");
    var Id= Number.parseFloat( quizId ? quizId: "0");
    this.api.getQuestions(Id).subscribe((res) => (this.questions = res));
  }
}
