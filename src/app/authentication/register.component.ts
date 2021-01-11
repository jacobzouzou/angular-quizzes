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
            email:['jacob@isi.com',Validators.required],
            password:['!Nanok$1',Validators.required]
        });
    }

    register(){
        this.auth.register(this.form.value);
    }
    cancel(){
        this.router.navigate(['/']);
    }
}
