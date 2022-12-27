import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilfacultyhomeComponent } from './civilfacultyhome.component';

describe('CivilfacultyhomeComponent', () => {
  let component: CivilfacultyhomeComponent;
  let fixture: ComponentFixture<CivilfacultyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilfacultyhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilfacultyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
