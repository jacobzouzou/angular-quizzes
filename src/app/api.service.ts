import { Injectable } from "@angular/core"
import {HttpClient} from "@angular/common/http"

@Injectable()
export class ApiService{

    constructor(private httpClient:HttpClient){

    }
    postQuestion(question:any){
        this.httpClient.post("http://localhost:5000/api/questions",question).subscribe(res=> {
            console.log(res);
        });
    }
}