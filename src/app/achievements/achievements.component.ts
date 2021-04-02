import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GratitudeService } from '../gratitude.service';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievementList: Observable<any[]>;

  faTrophy=faTrophy;

  constructor(private service : GratitudeService) { }

  ngOnInit() {
    this.achievementList=this.service.getAchievementList();
  }

 

}
