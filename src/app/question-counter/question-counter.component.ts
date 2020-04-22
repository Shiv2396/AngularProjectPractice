import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-counter',
  templateUrl: './question-counter.component.html',
  styleUrls: ['./question-counter.component.css']
})
export class QuestionCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count = 0

  onButtonClicked(evt: MouseEvent) {
    this.count = this.count+1;
  }

  reset(evt: MouseEvent) {
    this.count = 0;
  }




}
