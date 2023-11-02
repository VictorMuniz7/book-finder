import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-finder';

  scrollToTop() {
    const element = document.querySelector('.back');
    if (element) {
      element.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
