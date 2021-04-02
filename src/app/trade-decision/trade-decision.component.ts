import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { timeInterval, timeout } from 'rxjs/operators';

@Component({
  selector: 'trade-decision',
  templateUrl: './trade-decision.component.html',
  styleUrls: ['./trade-decision.component.css']
})
export class TradeDecisionComponent implements OnInit {

  //tDecision:TradeDecisionInput;


  constructor(private http: Http) {
	}

  ngOnInit() {
   
  }

  
  /*
  decide(tDecision){
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(tDecision))
    this.getTradeDecision(tDecision);
    
  }

  private prefix='';
  private getTradeDecisionUrl = this.prefix+'/trade/decision';
  suggestion:string='';

	 getTradeDecision(tDecision:TradeDecisionInput): any {
    let taskHeaders = new Headers({ 'Content-Type': 'application/json'});
	  return this.http.post(this.getTradeDecisionUrl, JSON.stringify(tDecision) , { headers: taskHeaders })
	//	return this.http.get(this.getTradeDecisionUrl)
		.toPromise()
		.then(response => {
			console.log('getTradeDecision ');
      console.log(response['_body']);
      this.suggestion=response['_body'];
		});
  }*/
  
  tradeDirection: String;
  sl: number;
  timeStop: Date;
  tradeType: String;
  currentPrice:number;
  tradePrice:number ;
  bestTradePrice:number ;
  bestTradeOption:number=0;
  calcSL:number;
  calcBestTradeSL:number;
  //timedDisplay:boolean=true;


  getAnswer(curPrice : HTMLInputElement){
    //console.log("timedDisplay "+this.timedDisplay);
    let cPrice=curPrice.value;
    curPrice.value="";

    this.tradeDirection=this.randomTrade();
    //this.bestTradeOption=this.randomBestBuy(); //TODO Enable this to get best tradeoptions

    if(this.tradeDirection!="N"){
      this.sl=this.randomSL();
      this.tradeType=this.randomType();

    
      let digitCount:number=this.getSumOfDigits(cPrice);
      console.log("digitCount "+digitCount);
  
      let tPrice:number=this.decideTradePrice(parseInt(cPrice),digitCount);
      console.log("tradePrice "+tPrice);

      this.currentPrice=parseInt(cPrice);
      this.tradePrice=tPrice;
      this.calcSL=(this.tradeDirection=='B')?(tPrice-this.sl):(tPrice+this.sl);
      if(this.bestTradeOption>1){
        this.bestTradePrice=(this.tradeDirection=='B')?(tPrice-(this.bestTradeOption*9)):(tPrice+(this.bestTradeOption*9));
        this.calcBestTradeSL=(this.tradeDirection=='B')?(this.bestTradePrice-this.sl):(this.bestTradePrice+this.sl);
      }


    }else{
      //get time duration
      let todayDate=new Date();
      let duration:number=this.randomRange(5,22); // 5 to 22 mins
      console.log("Random duration "+duration);
      //console.log("Date +1  :" + new Date().setDate(todayDate.getDate()+1));
      todayDate.setMinutes(todayDate.getMinutes() + duration);
      this.timeStop=todayDate;

     
  
    }

  }

 
  decideTradePrice(currentPrice: number, digitCount: number): number {

    let desiredDigitCount: number = 5;
    let tradePrice: number = currentPrice;

    if (this.tradeDirection == 'B') {
      // //find lower number or Buy price 
      let lowNum: number = currentPrice;
      if (digitCount < desiredDigitCount) {
        lowNum = lowNum - (desiredDigitCount + digitCount - 1);
      } else if (digitCount > desiredDigitCount) {
        lowNum = lowNum - (digitCount - desiredDigitCount);
      }
      tradePrice=lowNum;
    } else if (this.tradeDirection == 'S') {

      //find Upper number or SELL price 
      let upNum: number = currentPrice;
      if (digitCount > desiredDigitCount) {
        upNum = ((9 - digitCount) + desiredDigitCount) - (-upNum);
      } else if (digitCount < desiredDigitCount) {
        upNum = upNum - (digitCount - desiredDigitCount);
      }
      tradePrice=upNum;
    }
    return tradePrice;
  }
 
  getSumOfDigits(currentPrice: String): number {
    let sum = 0;
    for (let index = 0; index < currentPrice.length; index++) {
      let currDigit1 = currentPrice.charAt(index);
      sum = parseInt(currDigit1) + sum;

      if (sum > 9)
        sum = sum - 9;
      //console.log("currDigit1 "+currDigit1 + " === sum "+sum);
    }
    return sum;
  }

  answerAgain(){
    //this.timedDisplay=true;
  }

  randomSL():number{
    return this.randomRange(28,42);
  }

  randomBestBuy():number{
    return this.randomRange(1,10);
   }

  randomType():String{
     let num=this.randomRange(1,3);
    if (num==1){
      return "MIS";
    }else if (num==2){
      return "NRML";
    }else{
      return "CO";
    }
  }

  randomTrade():String{
    let num=this.randomRange(1,3);
   if (num==1){
     return "B";
   }else if (num==2){
     return "N";
   }else{
     return "S";
   }
 }

  randomRange(low ,high): number{
    let num=Math.floor(Math.random() * (high-low+1)) + low;
    console.log("Number "+num);
    return num;
  }

}

export class TradeDecisionInput{
  mood:string;
  isInventoryDay:boolean;
  isFriday:boolean;
  isHoliday:boolean;
  trend:string;
  grandmaAdvices:string;
  expMinProfit:number;
  megaUnits:number;
  miniUnits:number;
  currentPrice:number;
  dollarTrend:string;

  // constructor(mood:string ){
  //   this.mood=mood;
  // }

}
