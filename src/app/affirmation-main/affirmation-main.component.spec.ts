import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmationMainComponent } from './affirmation-main.component';

describe('AffirmationMainComponent', () => {
  let component: AffirmationMainComponent;
  let fixture: ComponentFixture<AffirmationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffirmationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffirmationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
