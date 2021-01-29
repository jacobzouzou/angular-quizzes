import {Component} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
// import {Question} from "./data.service";

@Component({
    selector:"question",
    templateUrl:"./question.component.html",
})
export class QuestionComponent{
   // question={} as Question; // or question=<Question>{};
    question:any={};
    quizId:any=null;
    
    constructor (private api:ApiService, private router:Router, private route:ActivatedRoute){}
    
    ngOnInit(){
        this.quizId= this.route.snapshot.paramMap.get("quizId");
        // this.route.params.subscribe(params => {
        //     let id = params['questionId'];          

        // });

        this.api.questionSelected.subscribe(question=>{
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