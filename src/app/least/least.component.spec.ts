import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastComponent } from './least.component';

describe('LeastComponent', () => {
  let component: LeastComponent;
  let fixture: ComponentFixture<LeastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
