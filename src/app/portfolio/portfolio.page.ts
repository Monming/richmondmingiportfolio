import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonInput,
  IonTextarea,
  IonButton,
} from '@ionic/angular/standalone';
import { ProjectCardComponent, ProjectCardData } from '../shared/components/project-card/project-card.component';
import { ProjectCaseStudyModalComponent, ProjectCaseStudy } from '../shared/components/project-case-study-modal/project-case-study-modal.component';
import { DeveloperStatsComponent } from '../shared/components/developer-stats/developer-stats.component';
import { ArchitectureDiagramComponent } from '../shared/components/architecture-diagram/architecture-diagram.component';
import { SkillsSectionComponent } from '../shared/components/skills-section/skills-section.component';
import { TimelineItemComponent } from '../shared/components/timeline-item/timeline-item.component';
import { ScrollRevealDirective } from '../shared/directives/scroll-reveal.directive';

const TECH_FILTER_OPTIONS = ['All', 'Ionic Angular', 'Node.js', 'PostgreSQL', 'Tailwind', 'HTML'];

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
    ProjectCaseStudyModalComponent,
    DeveloperStatsComponent,
    ArchitectureDiagramComponent,
    SkillsSectionComponent,
    TimelineItemComponent,
    ScrollRevealDirective,
  ],
})
export class PortfolioPage {
  readonly emailUser = 'richmond.mingi';
  readonly emailDomain = 'email.com';
  readonly selectedProject = signal<ProjectCaseStudy | null>(null);
  readonly techFilter = signal<string>('All');

  readonly filterOptions = TECH_FILTER_OPTIONS;

  get emailDisplay(): string {
    return `${this.emailUser} [at] ${this.emailDomain}`;
  }

  openMailto(): void {
    window.location.href = `mailto:${this.emailUser}@${this.emailDomain}`;
  }

  setTechFilter(filter: string): void {
    this.techFilter.set(filter);
  }

  onViewCaseStudy(project: ProjectCardData): void {
    this.selectedProject.set({
      ...project,
      problem: (project as ExtendedProject).problem,
      technicalDecisions: (project as ExtendedProject).technicalDecisions,
      challenges: (project as ExtendedProject).challenges,
      architecture: (project as ExtendedProject).architecture,
    });
  }

  closeCaseStudyModal(): void {
    this.selectedProject.set(null);
  }

  filteredProjects = computed(() => {
    const filter = this.techFilter();
    if (filter === 'All') return this.allProjects;
    return this.allProjects.filter((p) =>
      p.tech.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
    );
  });

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
      isCurrent: true,
      description: 'Lead IT strategy and technical roadmap. Manage software development initiatives, oversee infrastructure, security, and compliance. Drive digital transformation.',
      responsibilities: [
        'Lead IT strategy and technical roadmap alignment',
        'Manage software development initiatives',
        'Oversee infrastructure, security, and compliance',
        'Drive digital transformation',
      ],
      tech: ['Ionic Angular', 'Node.js', 'PostgreSQL', 'IT Strategy'],
    },
    {
      num: '2',
      title: 'IT Support',
      company: 'Ascendant Global Inc.',
      period: '2019 — 2022',
      isCurrent: false,
      description: 'Desktop, network, and server support. User accounts, troubleshooting, and documentation.',
      responsibilities: [
        'Desktop, network, and server support',
        'Troubleshoot hardware and software issues',
        'Manage user accounts and access control',
        'Documentation and knowledge base',
      ],
      tech: ['Windows', 'Linux', 'Networking', 'TCP/IP'],
    },
  ];

  allProjects: ExtendedProject[] = [
    {
      title: 'Web-Based Online Vapeshop',
      year: '2016',
      role: 'Full-Stack Developer',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL'],
      description: 'E-commerce web application for vape products with cart, checkout, and admin panel.',
      objectives: ['Implement product catalog and search', 'Build secure checkout flow', 'Admin inventory management'],
      problem: 'Need for online ordering and inventory management for vape retail.',
      technicalDecisions: ['Node.js + Express for API', 'PostgreSQL for transactional data', 'Responsive HTML/CSS/JS frontend'],
      challenges: ['Cart state management', 'Secure payment flow'],
      architecture: 'Monolithic SPA with REST API, PostgreSQL backend.',
    },
    {
      title: 'Live Translation App',
      year: '2017',
      role: 'Full-Stack Developer',
      tech: ['Ionic Angular', 'Google Cloud Translation API'],
      description: 'Mobile application for real-time text translation across multiple languages.',
      objectives: ['Integrate Google Cloud Translation API', 'Support 50+ languages', 'Offline dictionary caching'],
      problem: 'Mobile users need quick translation without leaving the app.',
      technicalDecisions: ['Ionic Angular for cross-platform', 'Google Cloud Translation API', 'Local storage for offline'],
      challenges: ['API rate limits', 'Offline dictionary sync'],
      architecture: 'Ionic Angular client → Google Cloud Translation API.',
    },
    {
      title: 'Client Project (NDA)',
      year: '2018–2020',
      role: 'Full-Stack Developer',
      tech: ['Ionic Angular', 'Node.js', 'PostgreSQL'],
      description: 'Three confidential enterprise applications developed under NDA. Full-stack solutions for business process automation.',
      objectives: ['Custom CRM integration', 'Real-time reporting dashboards', 'Secure API design'],
      problem: 'Confidential - business process automation requirements.',
      technicalDecisions: ['Ionic Angular + Node.js stack', 'PostgreSQL for data', 'Role-based access control'],
      challenges: ['NDA - confidential'],
      architecture: 'Ionic frontend → Node.js REST API → PostgreSQL.',
    },
    {
      title: 'Static Website Project',
      year: '2021',
      role: 'Frontend Developer',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
      description: 'Responsive marketing website with modern UI and optimized performance.',
      objectives: ['Responsive design', 'SEO optimization', 'Fast load times'],
      problem: 'Marketing site needed modern design and fast load times.',
      technicalDecisions: ['Tailwind CSS for rapid styling', 'Vanilla JS for interactivity', 'Static hosting'],
      challenges: ['SEO optimization', 'Lighthouse performance'],
      architecture: 'Static HTML/CSS/JS, CDN deployment.',
    },
    {
      title: 'Inventory Management System (NDA)',
      year: '2023–2024',
      role: 'Lead Developer',
      tech: ['Ionic Angular', 'Node.js', 'PostgreSQL'],
      description: 'Enterprise inventory system deployed on local server. Manages stock, orders, suppliers, and reporting.',
      objectives: ['Barcode scanning integration', 'Automated reorder alerts', 'Multi-warehouse support', 'Analytics dashboard'],
      problem: 'Manual inventory tracking causing errors and stockouts.',
      technicalDecisions: ['Ionic Angular for mobile + web', 'Node.js API', 'PostgreSQL with proper indexing'],
      challenges: ['Barcode integration', 'Multi-warehouse logic', 'Reporting performance'],
      architecture: 'Ionic Angular → Node.js → PostgreSQL, deployed on local server.',
    },
    {
      title: 'AI-Powered Feedback & Reporting System',
      year: '2025–2026',
      role: 'Frontend Developer, mobile developer',
      tech: ['EJS, JavaScript, HTML, CSS, angular, typescript, node.js, express, mongodb, mongoose,', 'AI/ML'],
      imageUrl: 'assets/projects/ai-feedback.gif',
      description: 'AI-driven analytics system for feedback collection, sentiment analysis, and automated reporting.',
      objectives: ['NLP-powered sentiment analysis', 'Automated report generation', 'Real-time dashboards', 'Custom AI models'],
      problem: 'Manual feedback analysis and reporting was time-consuming.',
      technicalDecisions: ['Ionic Angular frontend', 'AI/ML for sentiment', 'Automated report generation'],
      challenges: ['NLP accuracy', 'Real-time dashboard updates'],
      architecture: 'Ionic Angular → AI/ML backend → Report generation.',
    },
  ];

  education = [
    { degree: 'BS Computer Science', school: 'Colegio De San Lorenzo', period: '2015–2019' },
    { degree: 'Secondary', school: 'Dr. Carlos S. Lanting College', period: '2010–2014' },
    { degree: 'Elementary', school: 'Tandang Sora Elementary School', period: '2003–2009' },
  ];

  technicalSkills = ['Ionic Angular', 'Node.js', 'PostgreSQL', 'Networking (TCP/IP, DHCP, UDP)', 'Windows', 'Linux', 'Android'];
  personalSkills = ['Problem Solving', 'Technical Documentation', 'Team Collaboration', 'Project Management'];

  heroTechBadges = ['Ionic', 'Angular', 'Node.js', 'PostgreSQL'];

  onSubmit(): void {
    console.log('Contact form submitted:', this.form);
  }
}

interface ExtendedProject extends ProjectCardData {
  problem?: string;
  technicalDecisions?: string[];
  challenges?: string[];
  architecture?: string;
}
