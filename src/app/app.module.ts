import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import {HttpClientModule} from '@angular/common/http';


import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CommentComponentComponent } from './comment-component/comment-component.component';
import { AffirmationMainComponent } from './affirmation-main/affirmation-main.component';
import { AffirmationCategorizedComponent } from './affirmation-categorized/affirmation-categorized.component';
import { AffirmationTextComponent } from './affirmation-text/affirmation-text.component';
import { AffirmationService } from './affirmation.service';
import { GratitudeService } from './gratitude.service';
import { MatTestComponent } from './mat-test/mat-test.component';

library.add(faCoffee,fas, far);



import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import { EditAffirmComponent } from './edit-affirm/edit-affirm.component';
import { AchievementsComponent } from './achievements/achievements.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BalanceComponent } from './balance/balance.component';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import {MatCardModule} from '@angular/material/card';
import { CrudCardComponent } from './crud-card/crud-card.component';
import { CrudCardLiComponent } from './crud-card-li/crud-card-li.component';
import { DataCrudService } from './data-crud.service';
import { ClimitsComponent } from './climits/climits.component';
import { TradeDecisionComponent } from './trade-decision/trade-decision.component';
import { JplanComponent } from './jplan/jplan.component';
import { DecisionComponent } from './decision/decision.component';
import { GoalsComponent } from './goals/goals.component';
import { WishesComponent } from './wishes/wishes.component';
import { DesiresComponent } from './desires/desires.component';
import { GiftsComponent } from './gifts/gifts.component';
import { HabitsComponent } from './habits/habits.component';
import { FocusAreasComponent } from './focus-areas/focus-areas.component';
import { FocusProjectsComponent } from './focus-projects/focus-projects.component';
import { MiniProjectsComponent } from './mini-projects/mini-projects.component';
import { GoalCardLiComponent } from './goal-card-li/goal-card-li.component';
import { GoalCardComponent } from './goal-card/goal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponentComponent,
    AffirmationMainComponent,
    AffirmationCategorizedComponent,
    AffirmationTextComponent,
    MatTestComponent,
    EditAffirmComponent,
    AchievementsComponent,
    BalanceComponent,
    BalanceCardComponent,
    CrudCardComponent,
    CrudCardLiComponent,
    ClimitsComponent,
    TradeDecisionComponent,
    JplanComponent,
    DecisionComponent,
    GoalsComponent,
    WishesComponent,
    DesiresComponent,
    GiftsComponent,
    HabitsComponent,
    FocusAreasComponent,
    FocusProjectsComponent,
    MiniProjectsComponent,
    GoalCardLiComponent,
    GoalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,MatSelectModule,
    MatInputModule,MatDatepickerModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    FormsModule
 
    
  ],
  providers: [AffirmationService,GratitudeService,AngularFireDatabase,DataCrudService],
  bootstrap: [AppComponent ],
  entryComponents:[EditAffirmComponent]
})
export class AppModule { }
