import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviladmSecondyearComponent } from './civiladm-secondyear.component';

describe('CiviladmSecondyearComponent', () => {
  let component: CiviladmSecondyearComponent;
  let fixture: ComponentFixture<CiviladmSecondyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiviladmSecondyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiviladmSecondyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
