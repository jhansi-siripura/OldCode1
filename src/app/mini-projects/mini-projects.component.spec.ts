import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjectsComponent } from './mini-projects.component';

describe('MiniProjectsComponent', () => {
  let component: MiniProjectsComponent;
  let fixture: ComponentFixture<MiniProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
