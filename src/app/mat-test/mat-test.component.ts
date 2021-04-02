import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditAffirmComponent } from '../edit-affirm/edit-affirm.component';

export interface Mood {
  id: string;
  emotion: string;
}

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-mat-test',
  templateUrl: './mat-test.component.html',
  styleUrls: ['./mat-test.component.css']
})
export class MatTestComponent implements OnInit {

  constructor(private dialog:MatDialog) { }



  ngOnInit() {
  }
  

  openDialog(){
    console.log('openDialog');
    this.dialog.open(EditAffirmComponent).afterClosed()
    .subscribe(res=>{
      console.log(res);
    });
  }



  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  moods:Mood[]=[
  {id:'1', emotion:'happy'},
  {id:'2', emotion:'good'},
  {id:'3', emotion:'bad'},
  {id:'4', emotion:'bliss'}
  ];
}
