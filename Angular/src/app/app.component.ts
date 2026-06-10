import { Component } from '@angular/core';
import { DxButtonModule, DxButtonTypes } from 'devextreme-angular/ui/button';

@Component({
    selector: 'app-root',
    imports: [DxButtonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  counter = 0;

  buttonText = 'Click count: 0';

  onClick(_e: DxButtonTypes.ClickEvent): void {
    this.counter++;
    this.buttonText = `Click count: ${this.counter}`;
  }
}
