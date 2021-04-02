import { Component, OnInit, Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { AffirmationService } from '../affirmation.service';



@Component({
  selector: 'affirmation-text',
  templateUrl: './affirmation-text.component.html',
  styleUrls: ['./affirmation-text.component.css']
})
export class AffirmationTextComponent implements OnInit {
  faEdit=faEdit;
faTrashAlt=faTrashAlt;
@Input() affirmText; 
@Input() affIndex: number; 
 


constructor(private faIconService: FaIconService , private service: AffirmationService) {
  this.faIconService.defaultPrefix = 'far';
}

  ngOnInit() {
  }



  editAffirmation(affirm){
    affirm.text= affirm.text+' UPDATED';
  this.service.editAffirmation(affirm);
  }
  
  deleteAffirmation(affirm){
    let id=affirm['key'];
    console.log('deleteAffirmation '+id);
    this.service.deleteAffirmation(id);
  }

 

}
