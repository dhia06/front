import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperVerticalComponent } from './stepper-vertical.component';

describe('StepperVerticalComponent', () => {
  let component: StepperVerticalComponent;
  let fixture: ComponentFixture<StepperVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
