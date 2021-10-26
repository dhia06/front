import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancerAppDoffresComponent } from './lancer-app-doffres.component';

describe('LancerAppDoffresComponent', () => {
  let component: LancerAppDoffresComponent;
  let fixture: ComponentFixture<LancerAppDoffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancerAppDoffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancerAppDoffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
