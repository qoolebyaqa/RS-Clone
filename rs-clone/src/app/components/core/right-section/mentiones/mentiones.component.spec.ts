import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionesComponent } from './mentiones.component';

describe('MentionesComponent', () => {
  let component: MentionesComponent;
  let fixture: ComponentFixture<MentionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
