import { Component } from '@angular/core';
import { QuestionComponent } from "./question/question.component";

@Component({
  selector: 'app-faq',
  imports: [QuestionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
