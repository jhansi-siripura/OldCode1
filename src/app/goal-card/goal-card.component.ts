import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.css']
})
export class GoalCardComponent implements OnInit {

  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

}