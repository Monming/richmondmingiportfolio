import { Component, input, OnInit, OnDestroy, inject, ElementRef } from '@angular/core';

export interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

@Component({
  selector: 'app-developer-stats',
  standalone: true,
  templateUrl: './developer-stats.component.html',
  styleUrls: ['./developer-stats.component.scss'],
})
export class DeveloperStatsComponent implements OnInit, OnDestroy {
  stats = input<StatItem[]>([
    { value: 8, label: 'Years Experience', suffix: '+' },
    { value: 12, label: 'Projects Delivered' },
    { value: 6, label: 'Systems Built' },
    { value: 15, label: 'Technologies Used', suffix: '+' },
  ]);

  displayedValues: number[] = [];

  private observer: IntersectionObserver | null = null;
  private el = inject(ElementRef);

  ngOnInit(): void {
    const statsData = this.stats();
    this.displayedValues = statsData.map(() => 0);

    if (typeof IntersectionObserver === 'undefined') {
      this.displayedValues = statsData.map((s) => s.value);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounts(statsData);
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateCounts(statsData: StatItem[]): void {
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    const timers: ReturnType<typeof setInterval>[] = [];

    statsData.forEach((stat, i) => {
      let step = 0;
      const increment = stat.value / steps;
      const t = setInterval(() => {
        step++;
        const val = Math.min(Math.round(increment * step), stat.value);
        this.displayedValues = [...this.displayedValues];
        this.displayedValues[i] = val;
        if (step >= steps) clearInterval(t);
      }, interval);
      timers.push(t);
    });
  }
}
