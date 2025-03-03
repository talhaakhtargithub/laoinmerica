import { Component } from '@angular/core';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component {
  scrollToTop(): void {
    // Simply scroll to top without preventing navigation.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
