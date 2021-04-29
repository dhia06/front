import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginproComponent } from './logginpro.component';

describe('LogginnComponent', () => {
  let component: LogginproComponent;
  let fixture: ComponentFixture<LogginproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogginproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
