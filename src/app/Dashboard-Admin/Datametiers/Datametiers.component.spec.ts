import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatametiersComponent } from './Datametiers.component';

describe('ChargementComponent', () => {
  let component: DatametiersComponent;
  let fixture: ComponentFixture<DatametiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatametiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatametiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
