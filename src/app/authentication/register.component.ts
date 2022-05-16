import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm:FormGroup;

  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    //form data building
    this.registerForm = formBuilder.group({
      email: ['jacob@isi.com', Validators.required],
      password: ['!Nanok$1', Validators.required],
    });
  }

  //submit managemnent method
  register(form: any) {
    this.auth.register(form.value);
  }
  cancel() {
    this.router.navigate(['']);
  }
}
