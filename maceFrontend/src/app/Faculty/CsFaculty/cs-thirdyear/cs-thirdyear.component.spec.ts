import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsThirdyearComponent } from './cs-thirdyear.component';

describe('CsThirdyearComponent', () => {
  let component: CsThirdyearComponent;
  let fixture: ComponentFixture<CsThirdyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsThirdyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsThirdyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
