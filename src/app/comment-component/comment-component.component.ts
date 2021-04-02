import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { GratitudeService } from '../gratitude.service';



@Component({
  selector: 'comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})
export class CommentComponentComponent implements OnInit {

  @Input() commentIndex: number; 
  @Input() today: string;
  @Input() gratitudeComment: any; 
  
 

faEdit=faEdit;
faTrashAlt=faTrashAlt;
heartClass = ['far', 'heart']  ;
starClass=['far', 'star'] ;
liked;
starred;
 


constructor(private faIconService: FaIconService ,private service: GratitudeService) {
  this.faIconService.defaultPrefix = 'far';
 }

 

ngOnInit() {
 console.log("gratitudeComment ngOnInit "+ this.gratitudeComment['$key']);
 if (this.gratitudeComment.starred) {
  this.starClass=['fas', 'star'];
 } else {
 this. starClass= ['far', 'star'];
 }


 if (this.gratitudeComment.liked) {
  this.heartClass=['fas', 'heart'];
 
} else {
  this.heartClass=['far', 'heart'];
}
}



heartUpdate(com){
   com.liked=!com.liked;
  if (com.liked) {
    this.heartClass=['fas', 'heart'];
     } else {
    this.heartClass=['far', 'heart'];
  }

 this.service.editGratitude(com);

}

starUpdate(com){
  com.starred=!com.starred;
 if (com.starred) {
  this.starClass=['fas', 'star'];
 } else {
 this. starClass= ['far', 'star'];
 }
 this.service.editGratitude(com);
}

editGratitideText(com){
  com.content= com.content+' UPDATED';
this.service.editGratitude(com);
}

deleteGratitideText(com){
  let id=com['key'];
  console.log('deleteGratitideText '+id);
  this.service.deleteGratitude(id);
}

}




 



