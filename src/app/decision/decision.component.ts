import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  answer:String;
  date:Date;
  constructor() { }

  ngOnInit() {
  }

  getAnswer(){

    this.answer=(this.randomRange(1,123456)%2)==0?"Y": "N";
    this.date=new Date();
  }

  randomRange(low ,high): number{
    let num=Math.floor(Math.random() * (high-low+1)) + low;
    return num;
  }

}
