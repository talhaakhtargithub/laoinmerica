import { Component } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component {
  scrollToTop(): void {
    // Simply scroll to top without preventing navigation.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
