import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDevisComponent } from './acc-devis.component';

describe('AccDevisComponent', () => {
  let component: AccDevisComponent;
  let fixture: ComponentFixture<AccDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
