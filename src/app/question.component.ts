import { componentFactoryName } from "@angular/compiler";
import {Component} from "@angular/core"
import {ApiService} from "./api.service"
@Component({
    selector:"question",
    templateUrl:"./question.component.html",
})
export class QuestionComponent{
    public question={
        text:"",
        correctAnswer:"",
        answer1:"",
        answer2:"",
        answer3:"",
    };
    
    constructor (private api:ApiService){

    }
    public post(question:any){
        this.api.postQuestion(question);
    }
}