import { componentFactoryName } from "@angular/compiler";
import {Component} from "@angular/core"

@Component({
    selector:"question",
    templateUrl:"./question.component.html",
})
export class QuestionComponent{
    public question:string="";
    public post(msg:string){
        console.log(msg);
    }
}