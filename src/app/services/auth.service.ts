import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(private http:HttpClient){

    }
    register(credantials: any){
        this.http.post<any>("http://localhost:5000/api/account", credantials).subscribe(
            res =>{
                localStorage.setItem("token",res);
        });
    }
}