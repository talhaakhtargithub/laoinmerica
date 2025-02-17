import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private router: Router) {}

  // Method to scroll to the top of the page
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll animation
    });
  }

  // Method to handle link clicks
  onLinkClick(route: string) {
    this.scrollToTop(); // Scroll to the top
    this.router.navigate([route]); // Navigate to the specified route
  }
}