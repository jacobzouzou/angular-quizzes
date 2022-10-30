import { Component, Inject } from '@angular/core';
import { providerMooviesToken } from 'src/app/providers';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  password = '!Nanok$1';

  constructor(
    public auth: AuthService,
    @Inject('mooviesToken')  public moovyList: [],
    @Inject(providerMooviesToken)  public providerMoovyList: any
  ) {
  }

  //submit management method
  login(form: any) {
    console.log(this.moovyList, this.providerMoovyList.medium);
    this.auth.login(form.value);
  }
}
