import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechadmHomeComponent } from './mechadm-home.component';

describe('MechadmHomeComponent', () => {
  let component: MechadmHomeComponent;
  let fixture: ComponentFixture<MechadmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechadmHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechadmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
