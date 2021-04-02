import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeDecisionComponent } from './trade-decision.component';

describe('TradeDecisionComponent', () => {
  let component: TradeDecisionComponent;
  let fixture: ComponentFixture<TradeDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
