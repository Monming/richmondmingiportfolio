import { Component, input } from '@angular/core';

export interface TimelineRole {
  num: string;
  title: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  responsibilities?: string[];
  tech: string[];
}

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent {
  readonly role = input.required<TimelineRole>();
  isExpanded = false;

  toggleResponsibilities(): void {
    this.isExpanded = !this.isExpanded;
  }
}
