import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreAppDoffresComponent } from './repondre-app-doffres.component';

describe('RepondreAppDoffresComponent', () => {
  let component: RepondreAppDoffresComponent;
  let fixture: ComponentFixture<RepondreAppDoffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepondreAppDoffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepondreAppDoffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
