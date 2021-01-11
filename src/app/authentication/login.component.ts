import {Component} from "@angular/core";
import {FormBuilder,Validators} from "@angular/forms"
import {AuthService} from "../services/auth.service";

@Component({
    templateUrl:"./login.component.html",
})
export class LoginComponent{
    form;
    constructor (private auth:AuthService, private fb:FormBuilder){
        this.form=fb.group({
            email:['jacob@isi.com',Validators.required],
            password:['!Nanok$1',Validators.required]
        });
    }

    login(){
        this.auth.login(this.form.value);
    }
}
