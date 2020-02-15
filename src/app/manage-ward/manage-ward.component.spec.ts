import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWardComponent } from './manage-ward.component';

describe('ManageWardComponent', () => {
  let component: ManageWardComponent;
  let fixture: ComponentFixture<ManageWardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
