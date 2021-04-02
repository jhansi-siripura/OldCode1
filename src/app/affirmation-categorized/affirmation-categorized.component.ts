import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { AffirmationService } from '../affirmation.service';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireObject } from 'angularfire2/database';
import { map } from 'rxjs/operators';


@Component({
  selector: 'affirmation-categorized',
  templateUrl: './affirmation-categorized.component.html',
  styleUrls: ['./affirmation-categorized.component.css']
})
export class AffirmationCategorizedComponent implements OnInit, OnChanges {

  @Input() category: string;
  faPlus = faPlus;
  addAffirm: boolean;
  //affirmList:any[];
  //  affirmList:any[]=["I love to love myself",
  //  "I love to add more affirmations ",
  //  "I love to beautiy this app and make it more funtional and useful"];

  showAddAffirm() {
    this.addAffirm = !this.addAffirm;
  }

  addAffirmation(inputTxt, cat) {

    let affirm2 = { text: inputTxt, category: cat };
    this.service.addAffirmation(affirm2);
    console.log("Inside addAffirmation ");
    this.addAffirm = false;
  }

  affirmList: Observable<any[]>;
  getAffirmations() {

    this.affirmList = this.service.getAffirmationsByCategory(this.category)
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );

    console.log("aList " + this.affirmList);
  }

  testTodoList() {
    this.service.getTodoList()
      .subscribe(resp => {
        console.log("Todo response " + resp.json());
      });
  }


  constructor(private faIconService: FaIconService, private service: AffirmationService) {
    this.faIconService.defaultPrefix = 'far';
    this.service = service;
  }

  ngOnInit() {
    console.log("In ng init " + this.category);
    this.getAffirmations();
  }

  ngOnChanges() {
    console.log("In ng ngOnChanges " + this.category);
    this.getAffirmations();
  }


}
