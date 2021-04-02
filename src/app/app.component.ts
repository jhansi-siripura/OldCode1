import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { GratitudeService } from './gratitude.service';
import { AngularFireList, AngularFireDatabase, QueryFn, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { map } from 'rxjs/operators';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faCoffee = faCoffee;
  
  
   today;
   yday;
   showYday;showToday;
   showAffirm;
  
   
   constructor(private faIconService: FaIconService,private db: AngularFireDatabase, private service:GratitudeService) {
    this.faIconService.defaultPrefix = 'far';

    let date = new Date();
    let d=date.getDate().toString();
    let m=(date.getMonth()+1).toString();
    let y=date.getFullYear().toString();
    let fullDateToday=d+"-"+m+"-"+y;

    this.today=fullDateToday;
    console.log("Today : "+this.today);
    d=(date.getDate()-1).toString();
    let fullDateyday=(d)+"-"+m+"-"+y;

    this.yday=fullDateyday;
    console.log("Yday : "+this.yday);

    this.getGratitude(this.today);

    }
   

    showListAffirm(){
      this.showAffirm=!this.showAffirm;
      this.showToday=false;
      this.showYday=false;
    }

    showListYday(){
      console.log("showListYday "+ this.showYday);
      this.showYday=!this.showYday;
      console.log("showListYday 2"+ this.showYday);
      this.showToday=false;
      this.showAffirm=false;
      console.log("Show yday "+ this.yday)
      this.getGratitude(this.yday);
    }

    showListToday(){
      this.showToday=!this.showToday;
      this.showYday=false;
      this.showAffirm=false;
     // this.calcPerc();
      console.log("Show today "+ this.today)
      this.getGratitude(this.today);
    }
 

   ngOnInit(){
     
   }
  

   addGratitude(value: string,e){
    console.log("Added "+e.value);
    let date = new Date();
    let d=date.getDate().toString();
    let m=(date.getMonth()+1).toString();
    let y=date.getFullYear().toString();
    let fullDate=d+"-"+m+"-"+y;
    let val:string =value.toString();
    console.log("Date "+fullDate);
    let v={content:val ,date:fullDate , liked:false , starred:false};
    this.service.addGratitude(v);
    e.value='';
   }

   // gratefulList: AngularFireList<any>;
   
  //gList:AngularFireList<any[]>;
  gList: Observable<any[]>;
 
  getGratitude(day){
    console.log("getGratitude day is "+ day);
    this.gList=this.service.getGratitudeListByDay(day).snapshotChanges()
    .pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    //this.gList.
     //.valueChanges()
     //.subscribe(resp =>{
      //this.gList=resp.json(); //java REST way
     //this.gList=resp as any[]; //firebase way ??
     
      // console.log('this  resp '+this.gList);
     //});
   }
  

}
