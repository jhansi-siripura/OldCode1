import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmationCategorizedComponent } from './affirmation-categorized.component';

describe('AffirmationCategorizedComponent', () => {
  let component: AffirmationCategorizedComponent;
  let fixture: ComponentFixture<AffirmationCategorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffirmationCategorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffirmationCategorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
