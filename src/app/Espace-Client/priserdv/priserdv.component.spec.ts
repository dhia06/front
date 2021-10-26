import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriserdvComponent } from './priserdv.component';

describe('PriserdvComponent', () => {
  let component: PriserdvComponent;
  let fixture: ComponentFixture<PriserdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriserdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriserdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
