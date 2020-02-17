import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubcategorymodalComponent } from './addsubcategorymodal.component';

describe('AddsubcategorymodalComponent', () => {
  let component: AddsubcategorymodalComponent;
  let fixture: ComponentFixture<AddsubcategorymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubcategorymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubcategorymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
