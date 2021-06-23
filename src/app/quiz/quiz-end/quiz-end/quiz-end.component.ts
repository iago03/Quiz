import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared_services/api.service';

@Component({
  selector: 'app-quiz-end',
  templateUrl: './quiz-end.component.html',
  styleUrls: ['./quiz-end.component.css']
})
export class QuizEndComponent implements OnInit {

  name:string = "";

  @Input() correct:number = 0;
  @Input() wrong:number = (10 - this.correct);

  constructor(private nameEvent:ApiService) { }

  ngOnInit(): void {
    this.nameEvent.nameEvent.subscribe((item:string) => {
      this.name = item;
    })
  }

  refresh(){
    window.location.reload();
  }

}
