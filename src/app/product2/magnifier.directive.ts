import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})
export class MagnifierDirective implements OnInit {
  lens!: HTMLElement;
  cx!: number;
  cy!: number;
  targetX: number = 0;
  targetY: number = 0;
  currentX: number = 0;
  currentY: number = 0;
  animationFrameId!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.lens = this.renderer.createElement('div');
    this.renderer.addClass(this.lens, 'img-magnifier-lens');
    this.renderer.setStyle(this.lens, 'position', 'absolute');
    this.renderer.setStyle(this.lens, 'border', '1px solid #d4d4d4');
    this.renderer.setStyle(this.lens, 'width', '200px');
    this.renderer.setStyle(this.lens, 'height', '200px');
    this.renderer.setStyle(this.lens, 'display', 'none');
    this.renderer.setStyle(this.lens, 'cursor', 'none');
    this.renderer.setStyle(this.lens, 'pointer-events', 'none'); // Avoid interfering with mouse events

    this.renderer.setStyle(this.el.nativeElement.parentElement, 'position', 'relative');
    this.renderer.appendChild(this.el.nativeElement.parentElement, this.lens);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    e.preventDefault();
    const pos = this.getCursorPos(e);
    this.targetX = pos.x - this.lens.offsetWidth / 2;
    this.targetY = pos.y - this.lens.offsetHeight / 2;

    if (!this.animationFrameId) {
      this.smoothMove();
    }
  }

  smoothMove() {
    this.currentX += (this.targetX - this.currentX) * 0.15;
    this.currentY += (this.targetY - this.currentY) * 0.15;

    this.renderer.setStyle(this.lens, 'left', `${this.currentX}px`);
    this.renderer.setStyle(this.lens, 'top', `${this.currentY}px`);

    this.renderer.setStyle(
      this.lens,
      'backgroundPosition',
      `-${this.currentX * this.cx}px -${this.currentY * this.cy}px`
    );

    if (Math.abs(this.targetX - this.currentX) > 0.5 || Math.abs(this.targetY - this.currentY) > 0.5) {
      this.animationFrameId = requestAnimationFrame(() => this.smoothMove());
    } else {
      this.animationFrameId = 0; // Stop the animation loop
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cx = 1.4;
    this.cy = 1.4;
    this.renderer.setStyle(this.lens, 'backgroundImage', `url('${this.el.nativeElement.src}')`);
    this.renderer.setStyle(
      this.lens,
      'backgroundSize',
      `${this.el.nativeElement.width * this.cx}px ${this.el.nativeElement.height * this.cy}px`
    );
    this.renderer.setStyle(this.lens, 'display', 'block');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.lens, 'display', 'none');
    cancelAnimationFrame(this.animationFrameId);
    this.animationFrameId = 0;
  }

  getCursorPos(e: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }
}
