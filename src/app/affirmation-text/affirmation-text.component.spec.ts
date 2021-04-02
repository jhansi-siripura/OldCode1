import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmationTextComponent } from './affirmation-text.component';

describe('AffirmationTextComponent', () => {
  let component: AffirmationTextComponent;
  let fixture: ComponentFixture<AffirmationTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffirmationTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffirmationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
