import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements AfterViewInit, OnDestroy {
  activeSections: Set<string> = new Set(); // To store one or two active sections
  private observer!: IntersectionObserver;

  @ViewChildren('section') sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.setupIntersectionObserver();
    this.setupSmoothScroll();
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      this.activeSections.clear(); // Reset before updating
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSections.add(entry.target.id);
        }
      });
    }, options);

    this.sections.forEach(section => {
      this.observer.observe(section.nativeElement);
    });
  }

  private setupSmoothScroll() {
    const sidebarLinks = document.querySelectorAll('.nav-link');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href')?.substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId!);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  isActive(sectionId: string): boolean {
    return this.activeSections.has(sectionId);
  }
}