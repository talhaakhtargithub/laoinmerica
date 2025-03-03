import { Component } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component {
  scrollToNextSection(event: Event) {
    event.preventDefault(); // Prevent default anchor behavior

    const nextSection = document.getElementById('storybehindsection');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
