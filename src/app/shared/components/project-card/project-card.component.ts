import { Component, input, output } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

export interface ProjectCardData {
  title: string;
  year: string;
  role: string;
  tech: string[];
  description: string;
  objectives: string[];
  imageUrl?: string;
  problem?: string;
  technicalDecisions?: string[];
  challenges?: string[];
  architecture?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectCardData>();
  readonly viewCaseStudy = output<ProjectCardData>();

  isExpanded = false;

  toggleObjectives(): void {
    this.isExpanded = !this.isExpanded;
  }

  onViewCaseStudy(): void {
    this.viewCaseStudy.emit(this.project());
  }
}
