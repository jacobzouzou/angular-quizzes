import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
    providedIn:"root"
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(){ }

    intercept(req:any, next:any){
        let token=localStorage.getItem("token");
        let authRequest=req.clone({
            headers:req.headers.set("authorization",`Bearer ${token}`)
        })
        console.log(authRequest);
        return next.handle(authRequest);
    }
}