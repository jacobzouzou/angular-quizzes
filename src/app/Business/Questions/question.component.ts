import {Component} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
// import {Question} from "./data.service";

@Component({
    selector:"question",
    templateUrl:"./question.component.html",
})
export class QuestionComponent{
   // question={} as Question; // or question=<Question>{};
    question:any={};
    quizId:any=null;
    
    constructor (private api:ApiService, private route:ActivatedRoute){}
    
    ngOnInit(){
        this.quizId= this.route.snapshot.paramMap.get("quizId");
        this.api.questionSelected.subscribe(question=>this.question=question);
    }
    postQuestion(question:any){
        question.quizId= Number.parseFloat(this.quizId?this.quizId:0);
        question.Id=0;
        this.api.postQuestion(question);
    }
    putQuestion(question:any){
        this.api.putQuestion(question);
    }
    Clear(){
        // this.question={} as Question;
        this.question={};
    }
}