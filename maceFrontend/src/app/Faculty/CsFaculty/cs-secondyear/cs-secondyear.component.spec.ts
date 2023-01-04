import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSecondyearComponent } from './cs-secondyear.component';

describe('CsSecondyearComponent', () => {
  let component: CsSecondyearComponent;
  let fixture: ComponentFixture<CsSecondyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsSecondyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsSecondyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
