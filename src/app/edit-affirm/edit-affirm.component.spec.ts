import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAffirmComponent } from './edit-affirm.component';

describe('EditAffirmComponent', () => {
  let component: EditAffirmComponent;
  let fixture: ComponentFixture<EditAffirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAffirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAffirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
