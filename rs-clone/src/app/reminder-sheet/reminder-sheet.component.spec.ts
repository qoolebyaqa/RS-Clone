import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderSheetComponent } from './reminder-sheet.component';

describe('ReminderSheetComponent', () => {
  let component: ReminderSheetComponent;
  let fixture: ComponentFixture<ReminderSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
