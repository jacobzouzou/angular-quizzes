import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn:"root"
})
export class AuthService {
    private authenticated:boolean=false;
    private loginError:boolean=false;
    private registerError:boolean=false;

    constructor(private http:HttpClient, private router:Router){  }

    get isAuthenticated(){
        return this.authenticated;
    }
    get isLoginError(){
        return this.loginError;
    }
    get isRegisterError(){
        return this.registerError;
    }
    ngOnInit(){
        this.loginError=false;
        this.registerError=false;
        this.authenticated=false;
    }
    register(credentials: any){
        this.http.post<any>("http://localhost:5000/api/account", credentials).subscribe(
            res =>{
                localStorage.setItem("token",res);
                this.router.navigate(['/login']);
            },
            error=>{
                console.error(error);
                this.registerError=true;
                this.router.navigate(['/register']);
            }       
        );
    }
    login(credentials: any){
        this.http.post<any>("http://localhost:5000/api/account/login", credentials).subscribe(
            res =>{
                localStorage.setItem("token",res);
                this.authenticated=true;
                this.router.navigate(['']);
            },
            error=>{
                console.error(error);
                this.loginError=true;
                this.router.navigate(['/login']);
            }       
        );
    }
    logout(){
        localStorage.removeItem("token");
        this.authenticated=false;
    }
}