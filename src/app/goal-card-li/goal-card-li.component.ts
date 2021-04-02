import { Component, OnInit, Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { DataCrudService } from '../data-crud.service';

@Component({
  selector: 'goal-card-li',
  templateUrl: './goal-card-li.component.html',
  styleUrls: ['./goal-card-li.component.css']
})
export class GoalCardLiComponent implements OnInit {

  faEdit=faEdit;
  faTrashAlt=faTrashAlt;
  editTypePanel:boolean=false;
  @Input() typeText; 
  @Input() typeIndex: number; 
  @Input() types:string; 

  constructor(private faIconService: FaIconService , private service: DataCrudService) {
    this.faIconService.defaultPrefix = 'far';
  }
  
  ngOnInit() {
  }

  editTypeStatus(event,typeResource){
    typeResource.status= !typeResource.status;
    this.service.edit(this.types,typeResource);
  }

  editType(value,typeResource){
    console.log("editType "+value);
    typeResource.text= value;
    this.service.edit(this.types,typeResource);
  }
  
  deleteType(typeResource){
    let id=typeResource['key'];
   console.log('delete' +this.types+ '+id');
   this.service.delete(this.types,id);
  }


}

 
