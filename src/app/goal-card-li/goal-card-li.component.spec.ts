import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCardLiComponent } from './goal-card-li.component';

describe('GoalCardLiComponent', () => {
  let component: GoalCardLiComponent;
  let fixture: ComponentFixture<GoalCardLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalCardLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalCardLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
