import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProjetsAdminComponent } from './liste-projets-admin.component';

describe('ListeProjetsAdminComponent', () => {
  let component: ListeProjetsAdminComponent;
  let fixture: ComponentFixture<ListeProjetsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProjetsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProjetsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
