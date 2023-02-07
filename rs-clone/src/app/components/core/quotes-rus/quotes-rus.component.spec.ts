import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { QuotesRusComponent } from './quotes-rus.component';

describe('QuotesRusComponent', () => {
  let component: QuotesRusComponent;
  let fixture: ComponentFixture<QuotesRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuotesRusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuotesRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
