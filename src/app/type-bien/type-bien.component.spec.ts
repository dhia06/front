import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBienComponent } from './type-bien.component';

describe('TypeBienComponent', () => {
  let component: TypeBienComponent;
  let fixture: ComponentFixture<TypeBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
