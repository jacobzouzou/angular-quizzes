import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuestionComponent } from './Business/Questions/question.component';
import { QuizComponent } from './Business/Quizzes/quiz.component';
import { PlayComponent } from './Business/play.component';
import { PlayQuizComponent } from './Business/Quizzes/playQuiz.component';
import { QuizzesComponent } from './Business/Quizzes/quizzes.component';
import { QuestionsComponent } from './Business/Questions/questions.component';
import { HomeComponent } from './Layout/home.component';
import { RegisterComponent } from './authentication/register.component';
import { LoginComponent } from './authentication/login.component';

import { NavComponent } from './Layout/nav.component';
import { FinishedComponent } from './Business/finished.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authentication/auth.interceptor';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'play', component: PlayComponent },
  { path: 'playQuiz/:quizId', component: PlayQuizComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    QuizComponent,
    PlayComponent,
    PlayQuizComponent,
    QuizzesComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    FinishedComponent
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
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents:[FinishedComponent]
})
export class AppModule {}
