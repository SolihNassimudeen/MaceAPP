import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFirstyearComponent } from './cs-firstyear.component';

describe('CsFirstyearComponent', () => {
  let component: CsFirstyearComponent;
  let fixture: ComponentFixture<CsFirstyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsFirstyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsFirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
