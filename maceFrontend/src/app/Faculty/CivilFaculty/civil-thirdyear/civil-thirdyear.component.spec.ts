import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilThirdyearComponent } from './civil-thirdyear.component';

describe('CivilThirdyearComponent', () => {
  let component: CivilThirdyearComponent;
  let fixture: ComponentFixture<CivilThirdyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilThirdyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilThirdyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
