import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizStartComponent } from './quiz/quiz-start/quiz-start/quiz-start.component';
import { QuizCardComponent } from './quiz/quiz-card/quiz-card/quiz-card.component';
import { QuizEndComponent } from './quiz/quiz-end/quiz-end/quiz-end.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared_services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    QuizStartComponent,
    QuizCardComponent,
    QuizEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
