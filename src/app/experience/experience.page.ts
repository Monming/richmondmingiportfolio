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
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
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
export class ExperiencePage {
  company = 'Ascendant Global Inc.';

  roles = [
    {
      title: 'IT Solutions Manager',
      period: '2022–Present',
      responsibilities: [
        'Lead IT strategy and technical roadmap alignment',
        'Manage software development initiatives and team coordination',
        'Oversee infrastructure, security, and compliance',
        'Drive digital transformation and process optimization',
      ],
    },
    {
      title: 'IT Support',
      period: '2019–2022',
      responsibilities: [
        'Provide desktop, network, and server support',
        'Troubleshoot hardware and software issues',
        'Manage user accounts and access control',
        'Document procedures and maintain knowledge base',
      ],
    },
  ];
}
