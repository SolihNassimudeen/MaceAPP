import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechfacultyhomeComponent } from './mechfacultyhome.component';

describe('MechfacultyhomeComponent', () => {
  let component: MechfacultyhomeComponent;
  let fixture: ComponentFixture<MechfacultyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechfacultyhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechfacultyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
