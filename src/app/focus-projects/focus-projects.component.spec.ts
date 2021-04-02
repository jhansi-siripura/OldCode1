import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusProjectsComponent } from './focus-projects.component';

describe('FocusProjectsComponent', () => {
  let component: FocusProjectsComponent;
  let fixture: ComponentFixture<FocusProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
