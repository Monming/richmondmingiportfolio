import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
  input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  /** Delay in ms before animation starts */
  delay = input(0);
  /** Offset from viewport bottom to trigger (px) */
  threshold = input(100);

  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.reveal();
      return;
    }

    const delay = this.delay();
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
    this.renderer.addClass(this.el.nativeElement, 'transition-all');
    this.renderer.addClass(this.el.nativeElement, 'duration-700');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => this.reveal(), delay);
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { rootMargin: `0px 0px ${this.threshold()}px 0px`, threshold: 0.01 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private reveal(): void {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
  }
}
