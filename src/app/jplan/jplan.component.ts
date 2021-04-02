import { Component, OnInit } from '@angular/core';


export class JDayTrade{
  iFunds:number;
  units:number;
  megaUnits:number;
  points:number;
  tProfit:number;
  level:number;
  fFunds:number;
  takeProfit:number;
  enjoyedProfit:number;
}

@Component({
  selector: 'jplan',
  templateUrl: './jplan.component.html',
  styleUrls: ['./jplan.component.css']
})
export class JplanComponent implements OnInit {

  unitCost:number=550;
  initFunds:number=2600;
  tradeArray:JDayTrade[]=[];
  enjoyedProfitTillDate:number=0;
  showTable;

  constructor() { }

  ngOnInit() {
  }

  
 // Plan C : 1 2 3 4 5 Formula ,Take the 50% of Profit and continiue business 
 startTrade(){
  console.log("startTrade");
  let jdt:JDayTrade= new JDayTrade();

  jdt.iFunds=this.initFunds;
  jdt.units=Math.floor((jdt.iFunds)/(this.unitCost));
  jdt.megaUnits=jdt.units*0.1;
  jdt.level=1;
  jdt.tProfit=Math.floor((jdt.iFunds*0.067)*jdt.level); ////LEVEL CHANGE 4 to 5 so 0.1 to 0.067
  jdt.points=Math.ceil((jdt.tProfit/jdt.units)*0.1)+3;
  jdt.takeProfit=Math.floor(jdt.tProfit/2);
  jdt.fFunds=(+jdt.tProfit + +jdt.iFunds) -(jdt.takeProfit) ;
  this.enjoyedProfitTillDate= this.enjoyedProfitTillDate+jdt.takeProfit;
  jdt.enjoyedProfit= this.enjoyedProfitTillDate;
  this.tradeArray.push(jdt);
 // this.profitTakenTillDate();

}

nextTrade(fianlFunds,plevel){
  console.log("nextTrade "+plevel);
  let jdt:JDayTrade= new JDayTrade();

  jdt.iFunds=fianlFunds;
  jdt.units=Math.floor((jdt.iFunds)/(this.unitCost));
  jdt.megaUnits=jdt.units*0.1;
  if(plevel==5){ //LEVEL CHANGE 4 to 5
    jdt.level=1;
  }else{
    jdt.level=plevel+1;
  }

  let rem:number=Math.floor((this.tradeArray.length)/5); //LEVEL CHANGE 4 to 5
  if(rem!==0){
  rem=(rem*5)-1; ////LEVEL CHANGE 4 to 5
 
  console.log("REM "+rem);
  let o:JDayTrade=this.tradeArray[rem];
  console.log("REM o "+o.fFunds);
  //jdt.tProfit=Math.floor((jdt.iFunds*0.1)*jdt.level);
   jdt.tProfit=Math.floor((o.fFunds*0.067)*jdt.level);//LEVEL CHANGE 4 to 5 so 0.1 to 0.067
  }else{
    jdt.tProfit=Math.floor((this.initFunds*0.067)*jdt.level);//LEVEL CHANGE 4 to 5 so 0.1 to 0.067
  }


  jdt.points=Math.ceil((jdt.tProfit/jdt.units)*0.1)+3;
  jdt.takeProfit=Math.floor(jdt.tProfit/2);
  jdt.fFunds=(+jdt.tProfit + +jdt.iFunds) -(jdt.takeProfit) ;
  this.enjoyedProfitTillDate= this.enjoyedProfitTillDate+jdt.takeProfit;
  jdt.enjoyedProfit= this.enjoyedProfitTillDate;
  this.tradeArray.push(jdt);
 // this.profitTakenTillDate();
}


/*
 // Plan B : 1 2 3 4  Formula ,Take the 50% of Profit and continiue business 
  startTrade(){
    console.log("startTrade");
    let jdt:JDayTrade= new JDayTrade();

    jdt.iFunds=this.initFunds;
    jdt.units=Math.floor((jdt.iFunds)/(this.unitCost));
    jdt.megaUnits=jdt.units*0.1;
    jdt.level=1;
    jdt.tProfit=Math.floor((jdt.iFunds*0.1)*jdt.level);
    jdt.points=Math.ceil((jdt.tProfit/jdt.units)*0.1)+3;
    jdt.takeProfit=Math.floor(jdt.tProfit/2);
    jdt.fFunds=(+jdt.tProfit + +jdt.iFunds) -(jdt.takeProfit) ;
    this.enjoyedProfitTillDate= this.enjoyedProfitTillDate+jdt.takeProfit;
    jdt.enjoyedProfit= this.enjoyedProfitTillDate;
    this.tradeArray.push(jdt);
   // this.profitTakenTillDate();
  
  }

  nextTrade(fianlFunds,plevel){
    console.log("nextTrade "+plevel);
    let jdt:JDayTrade= new JDayTrade();

    jdt.iFunds=fianlFunds;
    jdt.units=Math.floor((jdt.iFunds)/(this.unitCost));
    jdt.megaUnits=jdt.units*0.1;
    if(plevel==4){
      jdt.level=1;
    }else{
      jdt.level=plevel+1;
    }

    let rem:number=Math.floor((this.tradeArray.length)/4);
    if(rem!==0){
    rem=(rem*4)-1;
   
    console.log("REM "+rem);
    let o:JDayTrade=this.tradeArray[rem];
    console.log("REM o "+o.fFunds);
    //jdt.tProfit=Math.floor((jdt.iFunds*0.1)*jdt.level);
     jdt.tProfit=Math.floor((o.fFunds*0.1)*jdt.level);
    }else{
      jdt.tProfit=Math.floor((this.initFunds*0.1)*jdt.level);
    }


    jdt.points=Math.ceil((jdt.tProfit/jdt.units)*0.1)+3;
    jdt.takeProfit=Math.floor(jdt.tProfit/2);
    jdt.fFunds=(+jdt.tProfit + +jdt.iFunds) -(jdt.takeProfit) ;
    this.enjoyedProfitTillDate= this.enjoyedProfitTillDate+jdt.takeProfit;
    jdt.enjoyedProfit= this.enjoyedProfitTillDate;
    this.tradeArray.push(jdt);
   // this.profitTakenTillDate();
  }
 */

//   profitTakenTillDate()
// {
//  let enjoyedProfitTillDate:number=0;
//   this.tradeArray.forEach(data=>{
//     console.log("Data "+data.takeProfit);
//     enjoyedProfitTillDate=enjoyedProfitTillDate+data.takeProfit;
//     console.log("enjoyedProfitTillDate "+enjoyedProfitTillDate);
//   });
// }


  
/*
   // Plan A : 1 2 3 4  Formula and continiue business 
  
  startTrade(){
    console.log("startTrade");
    let jdt:JDayTrade= new JDayTrade();

    jdt.iFunds=this.initFunds;
    jdt.units=Math.floor((jdt.iFunds)/(this.unitCost));
    jdt.megaUnits=jdt.units*0.1;
    jdt.level=1;
    jdt.tProfit=Math.floor((jdt.iFunds*0.1)*jdt.level);
    jdt.points=Math.ceil((jdt.tProfit/jdt.units)*0.1)+3;
    jdt.fFunds=+jdt.tProfit + +jdt.iFunds;

    this.tradeArray.push(jdt);
   
  }

  nextTrade(fianlFunds,plevel){
    console.log("nextTrade "+plevel);
    let jdt:JDayTrade= new JDayTrade();

    jdt.iFunds=fianlFunds;
    jdt.units=Math.floor((jdt.iFunds)/(this.unitCost));
    jdt.megaUnits=jdt.units*0.1;
    if(plevel==4){
      jdt.level=1;
    }else{
      jdt.level=plevel+1;
    }

    let rem:number=Math.floor((this.tradeArray.length)/4);
    if(rem!==0){
    rem=(rem*4)-1;
   
    console.log("REM "+rem);
    let o:JDayTrade=this.tradeArray[rem];
    console.log("REM o "+o.fFunds);
    //jdt.tProfit=Math.floor((jdt.iFunds*0.1)*jdt.level);
     jdt.tProfit=Math.floor((o.fFunds*0.1)*jdt.level);
    }else{
      jdt.tProfit=Math.floor((this.initFunds*0.1)*jdt.level);
    }


    jdt.points=Math.ceil((jdt.tProfit/jdt.units)*0.1)+3;
    jdt.fFunds=jdt.tProfit+jdt.iFunds;

    this.tradeArray.push(jdt);
   
  }
  */

}
