import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-affirm',
  templateUrl: './edit-affirm.component.html',
  styleUrls: ['./edit-affirm.component.css']
})
export class EditAffirmComponent {



  // ngOnInit() {
  // }

  constructor( public dialogRef: MatDialogRef<EditAffirmComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
