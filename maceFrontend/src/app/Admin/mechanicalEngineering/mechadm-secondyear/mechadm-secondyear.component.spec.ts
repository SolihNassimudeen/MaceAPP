import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechadmSecondyearComponent } from './mechadm-secondyear.component';

describe('MechadmSecondyearComponent', () => {
  let component: MechadmSecondyearComponent;
  let fixture: ComponentFixture<MechadmSecondyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechadmSecondyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechadmSecondyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
