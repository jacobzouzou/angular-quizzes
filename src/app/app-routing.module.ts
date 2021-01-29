import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { PlayComponent } from './Business/play.component';
import { QuestionComponent } from './Business/Questions/question.component';
import { PlayQuizComponent } from './Business/Quizzes/playQuiz.component';
import { QuizComponent } from './Business/Quizzes/quiz.component';
import { HomeComponent } from './Layout/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  // { path: 'quizzes/:quizId', component: QuestionComponent },
  { path: 'quizzes/:quizId/questions', component: QuestionComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'play', component: PlayComponent },
  { path: 'playQuiz/:quizId', component: PlayQuizComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
