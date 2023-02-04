import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPopUpComponent } from './task-pop-up.component';

describe('TaskPopUpComponent', () => {
  let component: TaskPopUpComponent;
  let fixture: ComponentFixture<TaskPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
