import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private authenticated: boolean = false;
    private registered: boolean = false;
    private loginError: boolean = false;
    private registerError: boolean = false;

    constructor(private httpClient: HttpClient, private router: Router) { }

    //getters
    get isRegistered() {
        return this.registered;
    }
    get isAuthenticated() {
        return this.authenticated;
    }
    get hasLoginError() {
        return this.loginError;
    }
    get hasRegisterError() {
        return this.registerError;
    }
    //
    ngOnInit() {
        // this.loginError=false;
        // this.registerError=false;
        // this.authenticated=false;
    }
    register(credentials: any) {
        this.httpClient.post<any>("http://localhost:5000/api/account/register", credentials).subscribe(
            res => {
                if (res != null) {
                    localStorage.setItem("token", res);
                }
                this.registered = true;
                this.router.navigate(['/login']);
            },
            error => {
                console.error(error);
                this.registerError = true;
                this.router.navigate(['/register']);
            }
        );
    }
    login(credentials: any) {
        this.httpClient.post<any>("http://localhost:5000/api/account/login", credentials).subscribe(
            res => {
                localStorage.setItem("token", res);
                this.authenticated = true;
                this.router.navigate(['']);
            },
            error => {
                console.error(error);
                this.loginError = true;
                this.router.navigate(['/login']);
            }
        );
    }
    logout() {
        localStorage.removeItem("token");
        this.authenticated = false;        
    }
}