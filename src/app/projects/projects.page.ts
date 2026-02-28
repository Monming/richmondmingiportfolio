import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { ProjectCardComponent, ProjectCardData } from '../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonGrid,
    IonRow,
    IonCol,
    ProjectCardComponent,
  ],
})
export class ProjectsPage {
  collegeProjects: ProjectCardData[] = [
    {
      title: 'Web-Based Online Vapeshop',
      year: '2016',
      role: 'Developer',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL'],
      description: 'E-commerce web application for vape products with cart, checkout, and admin panel.',
      objectives: ['Implement product catalog and search', 'Build secure checkout flow', 'Admin inventory management'],
    },
    {
      title: 'Live Translation App',
      year: '2017',
      role: 'Developer',
      tech: ['Ionic Angular', 'Google Cloud Translation API'],
      description: 'Mobile application for real-time text translation across multiple languages.',
      objectives: ['Integrate Google Cloud Translation API', 'Support 50+ languages', 'Offline dictionary caching'],
    },
  ];

  confidentialProjects: ProjectCardData[] = [
    {
      title: 'Client Project (NDA)',
      year: '2018–2020',
      role: 'Full-Stack Developer',
      tech: ['Ionic Angular', 'Node.js', 'PostgreSQL'],
      description: 'Three confidential enterprise applications developed under NDA. Full-stack solutions for business process automation.',
      objectives: ['Custom CRM integration', 'Real-time reporting dashboards', 'Secure API design'],
    },
    {
      title: 'Static Website Project',
      year: '2021',
      role: 'Frontend Developer',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
      description: 'Responsive marketing website with modern UI and optimized performance.',
      objectives: ['Responsive design', 'SEO optimization', 'Fast load times'],
    },
  ];

  enterpriseProjects: ProjectCardData[] = [
    {
      title: 'Inventory Management System (NDA)',
      year: '2023–2024',
      role: 'Lead Developer',
      tech: ['Ionic Angular', 'Node.js', 'PostgreSQL'],
      description: 'Enterprise inventory system deployed on local server. Manages stock, orders, suppliers, and reporting.',
      objectives: ['Barcode scanning integration', 'Automated reorder alerts', 'Multi-warehouse support', 'Analytics dashboard'],
    },
    {
      title: 'AI-Powered Feedback & Reporting System',
      year: '2025–2026',
      role: 'Frontend Developer, mobile developer',
      tech: ['EJS, JavaScript, HTML, CSS, angular, typescript, node.js, express, mongodb, mongoose,', 'AI/ML'],
      imageUrl: 'assets/projects/ai-feedback.gif',
      description: 'AI-driven analytics system for feedback collection, sentiment analysis, and automated reporting.',
      objectives: ['NLP-powered sentiment analysis', 'Automated report generation', 'Real-time dashboards', 'Custom AI models'],
    },
  ];
}
