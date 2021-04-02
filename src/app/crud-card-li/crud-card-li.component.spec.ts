import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCardLiComponent } from './crud-card-li.component';

describe('CrudCardLiComponent', () => {
  let component: CrudCardLiComponent;
  let fixture: ComponentFixture<CrudCardLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCardLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCardLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
