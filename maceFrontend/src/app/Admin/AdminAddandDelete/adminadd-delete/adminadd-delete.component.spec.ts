import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddDeleteComponent } from './adminadd-delete.component';

describe('AdminaddDeleteComponent', () => {
  let component: AdminaddDeleteComponent;
  let fixture: ComponentFixture<AdminaddDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
