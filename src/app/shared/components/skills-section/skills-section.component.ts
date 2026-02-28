import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  ElementRef,
  NgZone,
  signal,
} from '@angular/core';

export interface SkillItem {
  name: string;
  level: number;
  width: string;
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private ngZone = inject(NgZone);
  private observer: IntersectionObserver | null = null;
  private filled = false;

  readonly skills = signal<SkillItem[]>([
    { name: 'Node.js & Express', level: 90, width: '0%' },
    { name: 'MongoDB (Aggregation & Schema Design)', level: 85, width: '0%' },
    { name: 'Frontend (EJS, Tailwind, Chart.js)', level: 95, width: '0%' },
    { name: 'Data Visualization & Dashboard UI', level: 90, width: '0%' },
    { name: 'Version Control (Git/GitHub)', level: 88, width: '0%' },
  ]);

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.fillBars();
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.ngZone.run(() => this.fillBars());
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px', threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
    // Fallback: if section is already in view on load, fill after a tick
    setTimeout(() => {
      if (this.filled) return;
      const rect = this.el.nativeElement.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) this.ngZone.run(() => this.fillBars());
    }, 400);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private fillBars(): void {
    if (this.filled) return;
    this.filled = true;
    const current = this.skills();
    this.skills.set(
      current.map((s) => ({ ...s, width: `${s.level}%` }))
    );
  }
}
