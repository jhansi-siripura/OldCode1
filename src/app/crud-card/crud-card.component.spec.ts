import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCardComponent } from './crud-card.component';

describe('CrudCardComponent', () => {
  let component: CrudCardComponent;
  let fixture: ComponentFixture<CrudCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
