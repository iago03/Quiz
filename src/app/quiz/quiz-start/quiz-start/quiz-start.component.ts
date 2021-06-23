import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Info } from 'src/app/shared_component/quiz_question_class';
import { ApiService } from 'src/app/shared_services/api.service';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit {
  validation:boolean = false;
  start:boolean = false;
  apiUrl:string = "";

  info:Info = new Info();

  @Output() gameStart:EventEmitter<boolean> = new EventEmitter();

  constructor(private webRequest:ApiService) { }

  ngOnInit(): void {
  }

  startQuiz(){
    if(this.info.Name != ""){
      this.creatApiUrl(this.info);
      this.webRequest.getDataFromApi(this.apiUrl).subscribe(res => {
        var resu:any = res;
        this.webRequest.questinEvent.emit(resu.results);
      });
  
      this.start = !this.start;
      this.gameStart.emit(this.start);

      this.webRequest.nameEvent.emit(this.info.Name);
      this.validation = false;
    }
    else{
      this.validation = true;
    }

    console.log(this.validation)
  }

  creatApiUrl(item:Info){
    if(item.Category != "any" && item.Difficulty != "any"){
      this.apiUrl = `https://opentdb.com/api.php?amount=10&category=${item.Category}&difficulty=${item.Difficulty}&type=multiple`;
    }
    else if(item.Category != "any" && item.Difficulty == "any"){
      this.apiUrl = `https://opentdb.com/api.php?amount=10&category=${item.Category}&type=multiple`;
    }
    else if(item.Category == "any" && item.Difficulty != "any"){
      this.apiUrl = `https://opentdb.com/api.php?amount=10&difficulty=${item.Difficulty}&type=multiple`;
    }else{
      this.apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple";
    }
  }

}
