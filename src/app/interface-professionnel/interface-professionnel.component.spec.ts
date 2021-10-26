import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceProfessionnelComponent } from './interface-professionnel.component';

describe('InterfaceProfessionnelComponent', () => {
  let component: InterfaceProfessionnelComponent;
  let fixture: ComponentFixture<InterfaceProfessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceProfessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
