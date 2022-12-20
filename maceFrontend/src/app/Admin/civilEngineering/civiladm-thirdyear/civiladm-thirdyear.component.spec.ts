import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviladmThirdyearComponent } from './civiladm-thirdyear.component';

describe('CiviladmThirdyearComponent', () => {
  let component: CiviladmThirdyearComponent;
  let fixture: ComponentFixture<CiviladmThirdyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiviladmThirdyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiviladmThirdyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
