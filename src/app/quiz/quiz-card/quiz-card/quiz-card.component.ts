import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question, Result, } from 'src/app/shared_component/quiz_question_class';
import { ApiService } from 'src/app/shared_services/api.service';


@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {

  chooseTheAnswer:boolean = false;
  index:number = 0;
  result:number = 0;
  allQuestion:any[] = [];
  questionItem:any = "";
  question:Question = new Question("question","a","b","c","d");

  @Output() eventResult:EventEmitter<Result> = new EventEmitter();


  constructor(private request:ApiService) { }

  ngOnInit(): void {
    this.request.questinEvent.subscribe((item:any) => {
      this.allQuestion = item;
      this.questionsRenderFunc(this.allQuestion);
    })
  }


  nextQuestion(){
    if(this.question.Answers != ""){

      if(this.index < 9){
        if(this.question.Answers === this.question.CorrectAnswer){
          this.result ++;
        }
        this.index ++;
        this.questionsRenderFunc(this.allQuestion);
      }
      else{
        if(this.question.Answers === this.question.CorrectAnswer){
          this.result ++;
        }
        var FinalResult:Result = new Result(this.result,false);
        this.eventResult.emit(FinalResult);
      }

      this.chooseTheAnswer = false;
    }
    else{
      this.chooseTheAnswer = true;
    }
  }

  answersArrayChange(item:any){
    var answersArray = [];
    for(let i = 0; i <= 2; i++){
      let random = Math.floor(Math.random()*3-i);
      let a = item.splice(random,1);
      answersArray.push(a[0]);
    }
    return answersArray;
  }

  questionsRenderFunc(item:any){
    var questionAnswers:any[] =[];
    this.questionItem = item[this.index];
    var iago = this.questionItem.question.replace(/&quot;/g,'"');
    questionAnswers = this.answersArrayChange(this.questionItem.incorrect_answers);
    questionAnswers.splice(Math.floor(Math.random()*3),0,this.questionItem.correct_answer);

    this.question = new Question(iago,questionAnswers[0],questionAnswers[1],questionAnswers[2],questionAnswers[3],this.questionItem.correct_answer);
  }
}
