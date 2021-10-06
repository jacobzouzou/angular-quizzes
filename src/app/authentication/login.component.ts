import {Component,Inject} from "@angular/core";
import { newLookupListToken } from "src/providers";
import {AuthService} from "../services/auth.service";

@Component({
    templateUrl:"./login.component.html",
})
export class LoginComponent{
    password="!Nanok$1";
    
    constructor (
        public auth:AuthService,
        @Inject('lookupListToken') lookupList:[], 
        @Inject(newLookupListToken) newLookupList:any){
            console.log(lookupList,newLookupList.medium);
    }

    login(form:any){
        this.auth.login(form.value);
    }
}
