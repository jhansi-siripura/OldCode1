import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.css']
})
export class BalanceCardComponent implements OnInit {

  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

}
