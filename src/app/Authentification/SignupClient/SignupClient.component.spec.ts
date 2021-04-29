import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupClientComponent } from './SignupClient.component';

describe('LeastComponent', () => {
  let component: SignupClientComponent;
  let fixture: ComponentFixture<SignupClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
