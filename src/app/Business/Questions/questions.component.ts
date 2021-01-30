import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent implements OnInit {
  question = {};
  questions: any;
  
  constructor(private api: ApiService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    var quizId= this.route.snapshot.paramMap.get("quizId");
    var Id= Number.parseFloat( quizId ? quizId: "0");
    this.api.getQuestions(Id).subscribe((res) => (this.questions = res));
  }
  selectQuestion(question:any){
      // this.router.navigate(['quizzes',question.quizId, 'questions',question.id]);
      this.api.selectQuestion(question);
  }
}
