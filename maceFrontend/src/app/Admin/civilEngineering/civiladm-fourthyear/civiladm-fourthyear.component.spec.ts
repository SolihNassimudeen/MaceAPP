import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviladmFourthyearComponent } from './civiladm-fourthyear.component';

describe('CiviladmFourthyearComponent', () => {
  let component: CiviladmFourthyearComponent;
  let fixture: ComponentFixture<CiviladmFourthyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiviladmFourthyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiviladmFourthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
