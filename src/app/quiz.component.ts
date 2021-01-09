import {Component} from "@angular/core";
import {ApiService} from "./api.service";

@Component({
    selector:"quiz",
    templateUrl:"./quiz.component.html",
})
export class QuizComponent{
    api:ApiService;
    quiz:any={}
    constructor (private apiService:ApiService){
        //constructor
        this.api=apiService;
    }
    ngOnInit(){
        this.api.quizSelected.subscribe(quiz=>this.quiz=quiz);
    }
}
