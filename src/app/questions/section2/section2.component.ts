import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component {
  scrollToTop(): void {
    // Simply scroll to top without preventing navigation.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
