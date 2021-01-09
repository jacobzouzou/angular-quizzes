import {Component} from "@angular/core";
import {ApiService} from "./api.service";
import {Question} from "./data.service";
@Component({
    selector:"question",
    templateUrl:"./question.component.html",
})
export class QuestionComponent{
    question={} as Question; // or question=<Question>{};
    // question:any={};
    
    constructor (private api:ApiService){
        //constructor
    }
    ngOnInit(){
        this.api.questionSelected.subscribe(question=>this.question=question);
    }
    postQuestion(question:any){
        this.api.postQuestion(question);
    }
    putQuestion(question:any){
        this.api.putQuestion(question);
    }
    Clear(){
        this.question={} as Question;
    }
}