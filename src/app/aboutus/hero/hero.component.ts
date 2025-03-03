import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  private audio = new Audio('assets/voice.mp3');
  isPlaying = false;

  toggleAudio() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0; // Reset to start
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }
  scrollToNextSection(event: Event) {
    event.preventDefault(); // Prevent default anchor behavior

    const nextSection = document.getElementById('nextSection');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
