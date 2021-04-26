import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderHouseComponent } from './oder-house.component';

describe('OderHouseComponent', () => {
  let component: OderHouseComponent;
  let fixture: ComponentFixture<OderHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
