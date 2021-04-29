import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmetiersComponent } from './taskmetiers.component';

describe('TaskmetiersComponent', () => {
  let component: TaskmetiersComponent;
  let fixture: ComponentFixture<TaskmetiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmetiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
