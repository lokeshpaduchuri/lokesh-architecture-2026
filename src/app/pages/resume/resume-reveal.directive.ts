import { AfterViewInit, DestroyRef, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appResumeReveal]',
  standalone: true,
})
export class ResumeRevealDirective implements AfterViewInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    element.classList.add('resume-timeline-card');

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px 40px 0px', threshold: 0 },
    );

    observer.observe(element);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
