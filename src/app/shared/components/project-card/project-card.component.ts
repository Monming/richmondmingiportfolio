import { Component, input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

export interface ProjectCardData {
  title: string;
  year: string;
  role: string;
  tech: string[];
  description: string;
  objectives: string[];
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectCardData>();

  isExpanded = false;

  toggleObjectives(): void {
    this.isExpanded = !this.isExpanded;
  }
}
