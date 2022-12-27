import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilSecondyearComponent } from './civil-secondyear.component';

describe('CivilSecondyearComponent', () => {
  let component: CivilSecondyearComponent;
  let fixture: ComponentFixture<CivilSecondyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilSecondyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilSecondyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
