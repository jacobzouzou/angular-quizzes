import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn:"root"
})
export class AuthService {
    constructor(private http:HttpClient, private router:Router){

    }
    get isAuthenticated(){
        return !!localStorage.getItem('token');
    }
    register(credentials: any){
        this.http.post<any>("http://localhost:5000/api/account", credentials).subscribe(
            res =>{
                this.authenticate(res);
            },
            error=>console.error(error)            
        );
    }
    login(credentials: any){
        this.http.post<any>("http://localhost:5000/api/account/login", credentials).subscribe(
            res =>{
               this.authenticate(res);
            },
            error=>console.error(error)            
        );
    }
    logout(){
        localStorage.removeItem("token");
    }
    private authenticate(res:any){
        localStorage.setItem("token",res);
        this.router.navigate(['/']);
    }
}