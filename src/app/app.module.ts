import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './authentication/register.component';
import { LoginComponent } from './authentication/login.component';

import { NavComponent } from './nav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ApiService } from './services/api.service';
// import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './authentication/auth.interceptor';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    QuizComponent,
    QuizzesComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
