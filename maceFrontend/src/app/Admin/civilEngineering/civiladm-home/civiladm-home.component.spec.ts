import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviladmHomeComponent } from './civiladm-home.component';

describe('CiviladmHomeComponent', () => {
  let component: CiviladmHomeComponent;
  let fixture: ComponentFixture<CiviladmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiviladmHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiviladmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
