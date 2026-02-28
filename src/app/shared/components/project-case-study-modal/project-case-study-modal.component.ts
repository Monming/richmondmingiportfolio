import { Component, input, output } from '@angular/core';

export interface ProjectCaseStudy {
  title: string;
  year: string;
  role: string;
  tech: string[];
  description: string;
  imageUrl?: string;
  problem?: string;
  technicalDecisions?: string[];
  challenges?: string[];
  architecture?: string;
  objectives?: string[];
}

@Component({
  selector: 'app-project-case-study-modal',
  standalone: true,
  templateUrl: './project-case-study-modal.component.html',
  styleUrls: ['./project-case-study-modal.component.scss'],
})
export class ProjectCaseStudyModalComponent {
  readonly project = input.required<ProjectCaseStudy>();
  readonly closeModal = output<void>();

  onClose(): void {
    this.closeModal.emit();
  }

  dismiss(): void {
    this.closeModal.emit();
  }
}
