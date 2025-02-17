// section4.component.ts
import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

interface Quote {
  text: string;
  writer: string;
  bgColor: string;
}

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements AfterViewInit, OnDestroy {
  @ViewChild('carousel') carousel!: ElementRef;
  private cardWidth: number = 400;
  private gap: number = 20;
  private intervalId: any;
  private currentIndex = 0;
  private scrollTimeout: any;

  quoteList: Quote[] = [
    { text: "This is the best molasses I've ever used! The flavor is rich and deep, making my baked goods taste incredible. I love that it's 100% natural too!", writer: 'Emily R.', bgColor: '#E6F1E1'},
    { text: "This is the best molasses I've ever used! The flavor is rich and deep, making my baked goods taste incredible. I love that it's 100% natural too!", writer: 'John D.', bgColor: '#FFEFCC' },
    { text: "This is the best molasses I've ever used! The flavor is rich and deep, making my baked goods taste incredible. I love that it's 100% natural too!", writer: 'Sarah M.', bgColor: '#FFD7D7' },
    { text: "This is the best molasses I've ever used! The flavor is rich and deep, making my baked goods taste incredible. I love that it's 100% natural too!", writer: 'Mike T.', bgColor: '#E6F1E1'},
    { text: "This is the best molasses I've ever used! The flavor is rich and deep, making my baked goods taste incredible. I love that it's 100% natural too!", writer: 'Emma W.', bgColor: '#FFEFCC' },
    { text: "This is the best molasses I've ever used! The flavor is rich and deep, making my baked goods taste incredible. I love that it's 100% natural too!", writer: 'David S.', bgColor: '#FFD7D7' },
  ];

  ngAfterViewInit() {
    this.updateCardWidth();
    window.addEventListener('resize', () => this.updateCardWidth());
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.clearTimers();
    window.removeEventListener('resize', () => this.updateCardWidth());
  }

  private clearTimers() {
    clearInterval(this.intervalId);
    clearTimeout(this.scrollTimeout);
  }

  private startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  private resetAutoSlide() {
    this.clearTimers();
    this.startAutoSlide();
  }

  pauseAutoSlide() {
    this.clearTimers();
  }

  resumeAutoSlide() {
    this.startAutoSlide();
  }

  next() {
    const carousel = this.carousel.nativeElement;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    
    if (carousel.scrollLeft >= maxScroll - 10) {
      carousel.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
      carousel.scrollBy({
        left: this.cardWidth + this.gap,
        behavior: 'smooth'
      });
    }
    
    this.resetAutoSlide();
  }

  previous() {
    const carousel = this.carousel.nativeElement;
    
    if (carousel.scrollLeft <= 10) {
      carousel.scrollTo({
        left: carousel.scrollWidth,
        behavior: 'smooth'
      });
      this.currentIndex = this.quoteList.length - 1;
    } else {
      this.currentIndex--;
      carousel.scrollBy({
        left: -(this.cardWidth + this.gap),
        behavior: 'smooth'
      });
    }
    
    this.resetAutoSlide();
  }

  private updateCardWidth() {
    const card = this.carousel.nativeElement.querySelector('.quote-card');
    if (card) {
      this.cardWidth = card.offsetWidth;
      this.gap = parseInt(window.getComputedStyle(card).marginRight) || 20;
    }
  }
}