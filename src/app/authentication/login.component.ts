import {Component,Inject} from "@angular/core";
import { NewLookupListToken } from "src/providers";
import {AuthService} from "../services/auth.service";

@Component({
    templateUrl:"./login.component.html",
})
export class LoginComponent{
    password="!Nanok$1";
    
    constructor (
        public auth:AuthService,
        @Inject('lookupListToken') lookupList:[], 
        @Inject(NewLookupListToken) lookupListBis:any) {
            console.log(lookupList,lookupListBis.medium);
    }

    login(form:any){
        this.auth.login(form.value);
    }
}
