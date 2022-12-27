import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilFirstyearComponent } from './civil-firstyear.component';

describe('CivilFirstyearComponent', () => {
  let component: CivilFirstyearComponent;
  let fixture: ComponentFixture<CivilFirstyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilFirstyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilFirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
