import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'climits',
  templateUrl: './climits.component.html',
  styleUrls: ['./climits.component.css']
})
export class ClimitsComponent implements OnInit {

  uc1 :number;
  uc2 :number;
  uc3 :number;
  lc1 :number;
  lc2 :number;
  lc3 :number;
  uLevelWatch:number;
  lLevelWatch:number;
  showlevel;

  constructor() { }

  ngOnInit() {
  }

  addCprice(cPrice){

    this.uc1=(cPrice*1.04);
    this.uc2=(cPrice*1.06);
    this.uc3=(cPrice*1.09);

    this.uLevelWatch=this.uc1-100;

    this.lc1=(cPrice*(1-0.04));
    this.lc2=(cPrice*(1-0.06));
    this.lc3=(cPrice*(1-0.09));

    this.lLevelWatch=this.lc1+100;

  }

}
