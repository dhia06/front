import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiserAppDoffresProComponent } from './visualiser-app-doffres-pro.component';

describe('VisualiserAppDoffresProComponent', () => {
  let component: VisualiserAppDoffresProComponent;
  let fixture: ComponentFixture<VisualiserAppDoffresProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualiserAppDoffresProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiserAppDoffresProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
