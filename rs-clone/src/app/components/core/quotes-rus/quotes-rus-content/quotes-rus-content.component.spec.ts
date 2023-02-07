import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { QuotesRusContentComponent } from './quotes-rus-content.component';

describe('QuotesRusContentComponent', () => {
  let component: QuotesRusContentComponent;
  let fixture: ComponentFixture<QuotesRusContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesRusContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotesRusContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
