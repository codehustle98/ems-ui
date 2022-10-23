import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDepartmentModalComponent } from './add-edit-department-modal.component';

describe('AddEditDepartmentModalComponent', () => {
  let component: AddEditDepartmentModalComponent;
  let fixture: ComponentFixture<AddEditDepartmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDepartmentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDepartmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
