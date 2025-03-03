import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  scrollToTop(): void {
    // Simply scroll to top without preventing navigation.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
