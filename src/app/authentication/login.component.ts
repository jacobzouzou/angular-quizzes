import {Component,Inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Component({
    templateUrl:"./login.component.html",
})
export class LoginComponent{
    password="!Nanok$1";
    
    constructor (public auth:AuthService,@Inject('lookupListToken') lookupList:[]){
        console.log(lookupList);
    }

    login(form:any){
        this.auth.login(form.value);
    }
}
