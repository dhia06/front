import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetmetiersComponent } from './servicetmetiers.component';

describe('ServicetmetiersComponent', () => {
  let component: ServicetmetiersComponent;
  let fixture: ComponentFixture<ServicetmetiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicetmetiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicetmetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
