import {Component} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
// import {Question} from "../services/data.service";

@Component({
    selector:"question",
    templateUrl:"./question.component.html",
})
export class QuestionComponent{
   // question={} as Question; // or question=<Question>{};
    question:any={};
    quizId:any=null;
    
    constructor (private api:ApiService, private location:Location, private route:ActivatedRoute){}
    
    ngOnInit(){
        // this.route.params.subscribe(params => {
        //     this.quizId = params['quizId'];       
        // });

        this.quizId= this.route.snapshot.paramMap.get("quizId");
        
        this.api.questionSelected.subscribe(question=>{
            this.location.replaceState(`quizzes/${question.quizId}/questions/${question.id}`);
            this.question=question;
        });
    }
    postQuestion(question:any){
        question.Id=0;
        question.quizId= Number.parseFloat(this.quizId?this.quizId:0);
        this.api.postQuestion(question).subscribe((res)=>{
            window.location.reload();
        });
    }
    putQuestion(question:any){
        this.api.putQuestion(question).subscribe((res)=>{
            window.location.reload();
        });
    }
    Clear(){
        // this.question={} as Question;
        this.question={};
    }
}