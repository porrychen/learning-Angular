import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./css/app.component.scss']
})
export class AppComponent {
  title = 'SearchBook';
  tabs = [
    { name: 'Home', path: 'home' },
    { name: 'Show Books', path: 'showbooks' },
  ];
}
