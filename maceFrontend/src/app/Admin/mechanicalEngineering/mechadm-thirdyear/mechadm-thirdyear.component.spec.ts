import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechadmThirdyearComponent } from './mechadm-thirdyear.component';

describe('MechadmThirdyearComponent', () => {
  let component: MechadmThirdyearComponent;
  let fixture: ComponentFixture<MechadmThirdyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechadmThirdyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechadmThirdyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
