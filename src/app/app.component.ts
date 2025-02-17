import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,  // Animation duration
      once: false,     // Allows animations to trigger multiple times
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom' // Triggers animation only when scrolling down
    });
  }
}
