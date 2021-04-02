import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusAreasComponent } from './focus-areas.component';

describe('FocusAreasComponent', () => {
  let component: FocusAreasComponent;
  let fixture: ComponentFixture<FocusAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
