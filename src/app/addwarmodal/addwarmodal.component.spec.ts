import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwarmodalComponent } from './addwarmodal.component';

describe('AddwarmodalComponent', () => {
  let component: AddwarmodalComponent;
  let fixture: ComponentFixture<AddwarmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwarmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwarmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
