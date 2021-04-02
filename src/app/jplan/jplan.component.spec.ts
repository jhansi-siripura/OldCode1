import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JplanComponent } from './jplan.component';

describe('JplanComponent', () => {
  let component: JplanComponent;
  let fixture: ComponentFixture<JplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
