import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  MenuController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  folderOutline,
  briefcaseOutline,
} from 'ionicons/icons';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonRouterOutlet,
  ],
})
export class MainLayoutComponent {
  constructor(
    public layout: LayoutService,
    private menu: MenuController
  ) {
    addIcons({ homeOutline, folderOutline, briefcaseOutline });
  }

  getTabName(path: string): string {
    return path.replace(/^\//, '') || 'home';
  }

  closeMenu(): void {
    this.menu.close();
  }
}
