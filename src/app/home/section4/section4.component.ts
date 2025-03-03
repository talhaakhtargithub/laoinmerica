import { Component } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component {
  scrollToNextSection(event: Event) {
    event.preventDefault(); // Prevent default anchor behavior

    const nextSection = document.getElementById('benefits');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
