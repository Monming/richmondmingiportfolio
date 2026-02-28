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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class AboutPage {
  technicalSkills = [
    'Ionic Angular',
    'Node.js',
    'PostgreSQL',
    'Networking (TCP/IP, DHCP, UDP)',
    'Windows',
    'Linux',
    'Android',
  ];

  personalSkills = [
    'Problem Solving',
    'Technical Documentation',
    'Team Collaboration',
    'Project Management',
    'Client Communication',
  ];

  certifications = [
    'CCNA (Cisco Certified Network Associate)',
    'CompTIA A+',
    'ITIL Foundation',
  ];

  seminars = [
    'Ionic Framework Workshop',
    'Angular Best Practices',
    'Database Optimization',
    'Agile/Scrum Methodology',
  ];
}
