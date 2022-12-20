import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechadmFourthyearComponent } from './mechadm-fourthyear.component';

describe('MechadmFourthyearComponent', () => {
  let component: MechadmFourthyearComponent;
  let fixture: ComponentFixture<MechadmFourthyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechadmFourthyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechadmFourthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
