import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'affirmation-main',
  templateUrl: './affirmation-main.component.html',
  styleUrls: ['./affirmation-main.component.css']
})
export class AffirmationMainComponent implements OnInit {

  aCategories=["SelfLove","Health","Prosperity","Career","TrueLove" ];
  tabIndex=0;

  constructor() { }

  ngOnInit() {
  }

  clickTab(i){
    //console.log("CLicked tab index : "+i);
    this.tabIndex=i;
  }
}
