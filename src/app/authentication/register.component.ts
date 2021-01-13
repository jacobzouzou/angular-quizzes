import {Component} from "@angular/core";
import {FormBuilder,Validators} from "@angular/forms";
import {Router} from "@angular/router"

import {AuthService} from "../services/auth.service";

@Component({
    templateUrl:"./register.component.html",
})
export class RegisterComponent{
    form;
    constructor (private auth:AuthService, private fb:FormBuilder, private router:Router){
        this.form=fb.group({
            email:['',Validators.required],
            password:['',Validators.required]
        });
    }

    register(){
        this.auth.register(this.form.value);
        this.router.navigate(['/login']);
    }
    cancel(){
        this.router.navigate(['/']);
    }
}
