import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonInput,
  IonTextarea,
  IonButton,
} from '@ionic/angular/standalone';
import { ProjectCardComponent, ProjectCardData } from '../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  imports: [
    FormsModule,
    IonContent,
    IonItem,
    IonInput,
    IonTextarea,
    IonButton,
    ProjectCardComponent,
  ],
})
export class PortfolioPage {
  /** Obfuscated to reduce spam harvesting - parts stored separately */
  readonly emailUser = 'richmond.mingi';
  readonly emailDomain = 'email.com';

  get emailDisplay(): string {
    return `${this.emailUser} [at] ${this.emailDomain}`;
  }

  openMailto(): void {
    window.location.href = `mailto:${this.emailUser}@${this.emailDomain}`;
  }

  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  roles = [
    {
      num: '1',
      title: 'IT Solutions Manager',
      company: 'Ascendant Global Inc.',
      period: '2022 — Present',
      description: 'Lead IT strategy and technical roadmap. Manage software development initiatives, oversee infrastructure, security, and compliance. Drive digital transformation.',
      tech: ['Ionic Angular', 'Node.js', 'PostgreSQL', 'IT Strategy'],
    },
    {
      num: '2',
      title: 'IT Support',
      company: 'Ascendant Global Inc.',
      period: '2019 — 2022',
      description: 'Desktop, network, and server support. User accounts, troubleshooting, and documentation.',
      tech: ['Windows', 'Linux', 'Networking', 'TCP/IP'],
    },
  ];

  allProjects: ProjectCardData[] = [
    {
      title: 'Web-Based Online Vapeshop',
      year: '2016',
      role: 'Developer',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL'],
      description: 'E-commerce web application for vape products with cart, checkout, and admin panel.',
      objectives: ['Product catalog', 'Secure checkout', 'Admin inventory'],
    },
    {
      title: 'Live Translation App',
      year: '2017',
      role: 'Developer',
      tech: ['Ionic Angular', 'Google Cloud Translation API'],
      description: 'Mobile app for real-time text translation across multiple languages.',
      objectives: ['API integration', '50+ languages', 'Offline caching'],
    },
    {
      title: 'Client Projects (NDA)',
      year: '2018–2020',
      role: 'Full-Stack Developer',
      tech: ['Ionic Angular', 'Node.js', 'PostgreSQL'],
      description: 'Three confidential enterprise applications. Full-stack solutions for business process automation.',
      objectives: ['CRM integration', 'Reporting dashboards', 'Secure API'],
    },
    {
      title: 'Static Website Project',
      year: '2021',
      role: 'Frontend Developer',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
      description: 'Responsive marketing website with modern UI and optimized performance.',
      objectives: ['Responsive design', 'SEO optimization', 'Fast load'],
    },
    {
      title: 'Inventory Management System',
      year: '2023–2024',
      role: 'Lead Developer',
      tech: ['Ionic Angular', 'Node.js', 'PostgreSQL'],
      description: 'Enterprise inventory system deployed on local server. Stock, orders, suppliers, reporting.',
      objectives: ['Barcode scanning', 'Reorder alerts', 'Multi-warehouse'],
    },
    {
      title: 'AI-Powered Feedback & Reporting System',
      year: '2025–2026',
      role: 'Lead Developer',
      tech: ['Ionic Angular', 'AI/ML'],
      description: 'AI-driven analytics for feedback collection, sentiment analysis, and automated reporting.',
      objectives: ['NLP sentiment', 'Auto reports', 'Real-time dashboards'],
    },
  ];

  education = [
    { degree: 'BS Computer Science', school: 'Colegio De San Lorenzo', period: '2015–2019' },
    { degree: 'Secondary', school: 'Dr. Carlos S. Lanting College', period: '2010–2014' },
    { degree: 'Elementary', school: 'Tandang Sora Elementary School', period: '2003–2009' },
  ];

  technicalSkills = ['Ionic Angular', 'Node.js', 'PostgreSQL', 'Networking (TCP/IP, DHCP, UDP)', 'Windows', 'Linux', 'Android'];
  personalSkills = ['Problem Solving', 'Technical Documentation', 'Team Collaboration', 'Project Management'];

  onSubmit(): void {
    console.log('Contact form submitted:', this.form);
  }
}
