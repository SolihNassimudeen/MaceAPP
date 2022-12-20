import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviladmFirstyearComponent } from './civiladm-firstyear.component';

describe('CiviladmFirstyearComponent', () => {
  let component: CiviladmFirstyearComponent;
  let fixture: ComponentFixture<CiviladmFirstyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiviladmFirstyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiviladmFirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
