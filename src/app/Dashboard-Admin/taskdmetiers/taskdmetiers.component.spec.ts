import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdmetiersComponent } from './taskdmetiers.component';

describe('TaskdmetiersComponent', () => {
  let component: TaskdmetiersComponent;
  let fixture: ComponentFixture<TaskdmetiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskdmetiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskdmetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
