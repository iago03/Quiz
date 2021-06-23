import { Component } from '@angular/core';
import { Result } from './shared_component/quiz_question_class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  start:boolean = false;
  end:boolean = true;
  corect = 0;
  wrong = 0;

  gameStartEvent(event:boolean){
    this.start = event;
  }

  resultEvent(event:Result){
    this.end = event.End;
    this.corect = event.Correct;
    this.wrong = 10 - this.corect;
  } 
}
