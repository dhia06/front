import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupproComponent } from './signuppro.component';

describe('SignupproComponent', () => {
  let component: SignupproComponent;
  let fixture: ComponentFixture<SignupproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
