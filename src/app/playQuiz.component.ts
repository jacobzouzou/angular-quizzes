import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './playQuiz.component.html',  
  styleUrls:['./playQuiz.component.css']
})
export class PlayQuizComponent {
  quizzes: any = {};
  questions: any = {};
  quizId:any=null;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(this.quizId).subscribe((res) => {
      this.questions = res;
      this.questions.forEach((q:any) => {
        q.answers=[q.correctAnswer,q.answer1, q.answer2,q.answer3];
        shuffle(q.answers)
      });
    });
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  finish(){
    
  }
}

function shuffle(a:any) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}