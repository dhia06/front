import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignProComponent } from './sign-pro.component';

describe('SignProComponent', () => {
  let component: SignProComponent;
  let fixture: ComponentFixture<SignProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
