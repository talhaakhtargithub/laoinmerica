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

  isActive(sectionId: string): boolean {
    return this.activeSections.has(sectionId);
  }
}
