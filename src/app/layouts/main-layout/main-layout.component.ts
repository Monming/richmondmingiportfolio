import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [IonApp, IonRouterOutlet],
})
export class MainLayoutComponent {
  toggleMobileMenu(): void {
    document.querySelector('.sidebar')?.classList.toggle('mobile-open');
  }

  onNavClick(): void {
    document.querySelector('.sidebar')?.classList.remove('mobile-open');
  }
}
