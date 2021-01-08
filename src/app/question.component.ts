import {Component} from "@angular/core";
import {ApiService} from "./api.service";
import {Question} from "./data.service";
@Component({
    selector:"question",
    templateUrl:"./question.component.html",
})
export class QuestionComponent{
    // question={} as Question;
    question=<Question>{};
    
    constructor (private api:ApiService){
        //constructor
    }
    ngOnInit(){
        this.api.questionSelected.subscribe(question=>this.question=question);
    }
    public post(question:any){
        this.api.postQuestion(question);
    }
    clear(){
        this.question=<Question>{};
    }
}