import { Component, HostListener, AfterViewInit, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements AfterViewInit, OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Ensure smooth scrolling for anchor links
    this.setupSmoothScroll();
  }

  ngAfterViewInit(): void {
    this.updateActiveLink(); // Ensure first load works
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.updateActiveLink();
  }

  private setupSmoothScroll(): void {
    // Add smooth scroll behavior for anchor links
    const links = this.el.nativeElement.querySelectorAll('a[href^="#"]');
    links.forEach((link: HTMLAnchorElement) => {
      this.renderer.listen(link, 'click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = this.el.nativeElement.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  private updateActiveLink(): void {
    const sections = this.el.nativeElement.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100; // Adjust for header offset

    sections.forEach((section: HTMLElement) => {
      const id = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (id && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.setActiveLink(id);
      }
    });
  }

  private setActiveLink(id: string): void {
    const links = this.el.nativeElement.querySelectorAll('#navbar-example .nav-link');
    links.forEach((link: HTMLAnchorElement) => {
      if (link.getAttribute('href') === `#${id}`) {
        this.renderer.addClass(link, 'active');
      } else {
        this.renderer.removeClass(link, 'active');
      }
    });
  }
}