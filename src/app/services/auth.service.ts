import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn:"root"
})
export class AuthService {
    private authenticated:boolean=false;
    constructor(private http:HttpClient, private router:Router){ }

    get isAuthenticated(){
        return this.authenticated;
    }
    register(credentials: any){
        this.http.post<any>("http://localhost:5000/api/account", credentials).subscribe(
            res =>{
                localStorage.setItem("token",res);
            },
            error=>console.error(error)            
        );
    }
    login(credentials: any){
        this.http.post<any>("http://localhost:5000/api/account/login", credentials).subscribe(
            res =>{
                localStorage.setItem("token",res);
                this.authenticated=true;
            },
            error=>console.error(error)            
        );
    }
    logout(){
        localStorage.removeItem("token");
    }
}