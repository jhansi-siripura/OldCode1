import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { Observable } from 'rxjs';
import { DataCrudService } from '../data-crud.service';

@Component({
  selector: 'goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  type: string="Goals";
  types: string='/goals';
  faPlus = faPlus;
  addType: boolean;
  typeList: Observable<any[]>;

  constructor(private faIconService: FaIconService, private service: DataCrudService) {
    this.faIconService.defaultPrefix = 'far';
    this.service = service;

  }

  ngOnInit() {
    this.getTypeDataList();
  }

  showAddType() {
    this.addType = !this.addType;
  }

  addData(inputTxt) {
    //type = { text: inputTxt, category: cat, creationdt: '', completiondt: '', status: false };
    let   type = { text: inputTxt };
    this.service.add(this.types, type);
    //console.log("Inside addData " + this.addType);
    this.addType = false;
  }
 
  getTypeDataList() {
    this.typeList = this.service.getList(this.types);
    //console.log("typeList " + this.typeList);
  }
}
