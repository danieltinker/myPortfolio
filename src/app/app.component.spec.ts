import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
// <div class="p3">
// <div class="p3-titles">Electronics</div>
// <div class="p3-description">
//   Ive conducted several experiments that validate airplanes and drones
//   power system safety, plus gave professional solutions that helped
//   prepare the Air crafts during preflight.
// </div>
// </div>

// <div class="p3">
// <div class="p3-titles">Software Development</div>
// <div class="p3-description">
//   Python based software who takes excel sheets and aircraft power system
//   data, and creates a database that helps forecasting potential
//   generator overload and battery failures.
// </div>
// </div>

// <div class="p3">
// <div class="p3-titles">Languages</div>
// <div class="p3-description">
//   Hebrew, English, Spanish,<br />
//   Java, Python, C++, Matlab, HTML, CSS, JavaScript.
// </div>
// </div>

// <div class="p3">
// <div class="p3-titles">Art</div>
// <div class="p3-description">
//   I'm a self-taught artist & musician. you can find some of my work on
//   my gallery :)
// </div>
// </div>
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myPortfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myPortfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('myPortfolio app is running!');
  });
});





