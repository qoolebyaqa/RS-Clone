import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdFormComponent } from './upd-form.component';

describe('UpdFormComponent', () => {
  let component: UpdFormComponent;
  let fixture: ComponentFixture<UpdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
