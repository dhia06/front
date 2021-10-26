import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjGammeComponent } from './prj-gamme.component';

describe('PrjGammeComponent', () => {
  let component: PrjGammeComponent;
  let fixture: ComponentFixture<PrjGammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjGammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjGammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
