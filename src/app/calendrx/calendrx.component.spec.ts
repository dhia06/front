import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrxComponent } from './calendrx.component';

describe('CalendrxComponent', () => {
  let component: CalendrxComponent;
  let fixture: ComponentFixture<CalendrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
