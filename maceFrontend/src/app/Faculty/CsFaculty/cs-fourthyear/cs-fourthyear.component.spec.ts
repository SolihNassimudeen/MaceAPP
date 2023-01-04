import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFourthyearComponent } from './cs-fourthyear.component';

describe('CsFourthyearComponent', () => {
  let component: CsFourthyearComponent;
  let fixture: ComponentFixture<CsFourthyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsFourthyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsFourthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
