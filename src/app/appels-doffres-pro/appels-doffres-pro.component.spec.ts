import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelsDoffresProComponent } from './appels-doffres-pro.component';

describe('AppelsDoffresProComponent', () => {
  let component: AppelsDoffresProComponent;
  let fixture: ComponentFixture<AppelsDoffresProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelsDoffresProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppelsDoffresProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
