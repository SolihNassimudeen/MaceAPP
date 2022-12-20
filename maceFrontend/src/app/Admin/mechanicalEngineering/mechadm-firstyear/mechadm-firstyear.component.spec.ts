import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechadmFirstyearComponent } from './mechadm-firstyear.component';

describe('MechadmFirstyearComponent', () => {
  let component: MechadmFirstyearComponent;
  let fixture: ComponentFixture<MechadmFirstyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechadmFirstyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechadmFirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
