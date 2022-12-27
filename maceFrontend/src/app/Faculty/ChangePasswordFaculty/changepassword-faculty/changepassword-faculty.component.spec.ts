import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordFacultyComponent } from './changepassword-faculty.component';

describe('ChangepasswordFacultyComponent', () => {
  let component: ChangepasswordFacultyComponent;
  let fixture: ComponentFixture<ChangepasswordFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordFacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangepasswordFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
