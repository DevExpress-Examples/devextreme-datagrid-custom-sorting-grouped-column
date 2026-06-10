import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should sort the California group first while sort order is ascending', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const california = app.customers.find((c) => c.State === 'California');
    expect(california).toBeDefined();
    expect(app.calculateCellValue(california!)).toEqual('aaa');
    app.stateSortOrder = 'desc';
    expect(app.calculateCellValue(california!)).toEqual('zzz');
  });

  it('should render both solution headers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const headers = Array.from(compiled.querySelectorAll('h2')).map((h) => h.textContent);
    expect(headers.join(' ')).toContain('calculateGroupValue');
    expect(headers.join(' ')).toContain('Summary');
  });
});
