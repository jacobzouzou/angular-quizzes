import { Component, Inject } from '@angular/core';
import { MooviesToken } from 'src/app/providers';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  password = '!Nanok$1';

  constructor(
    public auth: AuthService,
    @Inject('mooviesToken')  public movies: [],
    @Inject(MooviesToken)  public Movies: any
  ) {
  }

  //submit management method
  login(form: any) {
    console.log(this.movies, this.Movies.medium);
    this.auth.login(form.value);
  }
}
