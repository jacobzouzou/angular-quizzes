import {Component} from "@angular/core";
import {FormBuilder,Validators} from "@angular/forms"
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router"

@Component({
    templateUrl:"./login.component.html",
})
export class LoginComponent{
    form;
    constructor (private auth:AuthService, private formBuilder:FormBuilder, private router:Router){
        this.form=formBuilder.group({
            email:['',Validators.required],
            password:['',Validators.required]
        });
    }

    login(){
        this.auth.login(this.form.value);
        this.router.navigate(['']);
    }
}
