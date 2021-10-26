import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvProjetComponent } from './nv-projet.component';

describe('NvProjetComponent', () => {
  let component: NvProjetComponent;
  let fixture: ComponentFixture<NvProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
