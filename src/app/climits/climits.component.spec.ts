import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimitsComponent } from './climits.component';

describe('ClimitsComponent', () => {
  let component: ClimitsComponent;
  let fixture: ComponentFixture<ClimitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
