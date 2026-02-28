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
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
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
export class EducationPage {
  education = [
    {
      degree: 'BS Computer Science',
      school: 'Colegio De San Lorenzo',
      period: '2015–2019',
    },
    {
      degree: 'Secondary Education',
      school: 'Dr. Carlos S. Lanting College',
      period: '2010–2014',
    },
    {
      degree: 'Elementary',
      school: 'Tandang Sora Elementary School',
      period: '2003–2009',
    },
  ];
}
