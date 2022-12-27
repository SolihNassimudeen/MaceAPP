import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfacultyhomeComponent } from './csfacultyhome.component';

describe('CsfacultyhomeComponent', () => {
  let component: CsfacultyhomeComponent;
  let fixture: ComponentFixture<CsfacultyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsfacultyhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsfacultyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
