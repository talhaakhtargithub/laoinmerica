import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  scrollToNextSection(event: Event) {
    event.preventDefault(); // Prevent default anchor behavior

    const nextSection = document.getElementById('storybehindsection');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
