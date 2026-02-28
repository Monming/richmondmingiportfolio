import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [IonApp, IonRouterOutlet],
})
export class MainLayoutComponent {
  theme = inject(ThemeService);

  toggleTheme(): void {
    this.theme.toggleTheme();
  }

  toggleMobileMenu(): void {
    document.querySelector('.sidebar')?.classList.toggle('mobile-open');
  }

  onNavClick(): void {
    document.querySelector('.sidebar')?.classList.remove('mobile-open');
  }
}
