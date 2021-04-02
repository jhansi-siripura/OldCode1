import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faPlus, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireObject } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { DataCrudService } from '../data-crud.service';

@Component({
  selector: 'crud-card',
  templateUrl: './crud-card.component.html',
  styleUrls: ['./crud-card.component.css']
})
export class CrudCardComponent implements OnInit, OnChanges {

  @Input() category: string;
  @Input() type: string;
  @Input() types: string;
  faPlus = faPlus;
  faTrophy=faTrophy;
  addType: boolean;
  typeList: Observable<any[]>;

  constructor(private faIconService: FaIconService, private service: DataCrudService) {
    this.faIconService.defaultPrefix = 'far';
    this.service = service;

  }

  ngOnInit() {
    console.log("In ng init 1" + this.category);
    this.getTypeDataList();
    //console.log("In ng init 2" + this.category +" "+this.getTypeDataList());
  }

  ngOnChanges() {
    //console.log("In ng ngOnChanges " + this.category);
   // this.getTypeDataList();
  }

  showAddType() {
    this.addType = !this.addType;
  }

  addData(inputTxt, cat) {
    let type;
    if (this.types == "todos") {
      type = { text: inputTxt, category: cat, creationdt: '', completiondt: '', status: false };
    } else {
      type = { text: inputTxt, category: cat };
    }

    this.service.add(this.types, type);
    console.log("Inside addData " + this.addType);
    this.addType = false;
  }

  completedTasks: number;
  totalTasks: number;
 
  getTypeDataList() {
       this.typeList = this.service.getTypesByCategory(this.types, this.category)
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );

    console.log("typeList " + this.typeList);

    this.typeList.forEach(res => { //each category of tasks here 
      this.completedTasks = 0;
      this.totalTasks = 0;
      //console.log("subscribe " + res);
      let arr: any[] = res;
      arr.forEach(d => {
        console.log("subscribe arr " + d.status);
        this.totalTasks++;
        if (d.status) {
          this.completedTasks = this.completedTasks + 1;
          }
      });

    });
   
  }

  showTrophy1(){
    if (this.completedTasks>=32){
      return true;
    }else {
      return false ;
    }
  }

  showTrophy2(){
    if (this.completedTasks>=64){
      return true;
    }else {
      return false ;
    }
  }

  showTrophy3(){
    if (this.completedTasks>=(32*3)){
      return true;
    }else {
      return false ;
    }
  }

  showTrophy4(){
    if (this.completedTasks>=(32*4)){
      return true;
    }else {
      return false ;
    }
  }

  showTrophy5(){
    if (this.completedTasks>=(32*5)){
      return true;
    }else {
      return false ;
    }
  }

}