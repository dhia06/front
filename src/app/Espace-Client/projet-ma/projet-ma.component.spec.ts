import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetMaComponent } from './projet-ma.component';

describe('ProjetMaComponent', () => {
  let component: ProjetMaComponent;
  let fixture: ComponentFixture<ProjetMaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetMaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
