import { Component } from '@angular/core';
import { ApiService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FinishedComponent } from "../finished.component"

@Component({
  templateUrl: './playQuiz.component.html',
  styleUrls: ['./playQuiz.component.css']
})
export class PlayQuizComponent {
  quizzes: any = {};
  questions: any = {};
  quizId: any = null;
  step = 0;


  constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) 
  {

  }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(this.quizId).subscribe((res) => {
      this.questions = res;
      this.questions.forEach((q: any) => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];
        shuffle(q.answers)
      });
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  finish() {
    var correct = 0;
    this.questions.forEach((q: any) => {
      if (q.correctAnswer === q.selectedAnswer) {
        correct++;
      }
    });
    const dialogRef = this.dialog.open(FinishedComponent, {
      data: {
        correct,
        total: this.questions.length
      }
    });

    console.log(correct);
  }
  openDialog() {
    const dialogRef = this.dialog.open(FinishedComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

function shuffle(a: any) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}