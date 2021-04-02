import { Component, OnInit } from '@angular/core';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { DataCrudService } from '../data-crud.service';


@Component({
  selector: 'habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {

  heartClass = ['fas', 'heart']  ;
  trackHabits=false;

  //habitsList=["Sing" , "Bharatanayam", "Belldance", "iosApp","Angular"];
  daysList=Array(31).fill(0).map((x,i)=>i+1);

  type: string="Habit";
  types: string='/habits';
  faPlus = faPlus;
  addType: boolean;
  habitsList: Observable<any[]>;

  constructor(private faIconService: FaIconService, private service: DataCrudService) {
   // this.faIconService.defaultPrefix = 'far';
    this.service = service;
  }

 

  ngOnInit() {
    this.getHabitList();
  }
  showAddType() {
    this.addType = !this.addType;
  }
  
  addHabit(inputTxt) {
    //type = { text: inputTxt, category: cat, creationdt: '', completiondt: '', status: false };
    let   type = { text: inputTxt };
    this.service.add(this.types, type);
    //console.log("Inside addData " + this.addType);
    this.addType = false;
  }
 
  getHabitList() {
    this.habitsList = this.service.getList(this.types);
    //console.log("typeList " + this.typeList);
  }

}
