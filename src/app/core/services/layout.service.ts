import { Injectable, signal, computed } from '@angular/core';

export type NavItem = {
  path: string;
  label: string;
  icon: string;
};

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly sidebarOpen = signal(true);
  private readonly activeNav = signal<string>('home');

  readonly isSidebarOpen = this.sidebarOpen.asReadonly();
  readonly activeNavPath = this.activeNav.asReadonly();

  readonly navItems: NavItem[] = [
    { path: '/home', label: 'Home', icon: 'home-outline' },
    { path: '/about', label: 'About', icon: 'person-outline' },
    { path: '/projects', label: 'Projects', icon: 'folder-outline' },
    { path: '/experience', label: 'Experience', icon: 'briefcase-outline' },
    { path: '/education', label: 'Education', icon: 'school-outline' },
    { path: '/contact', label: 'Contact', icon: 'mail-outline' },
  ];

  toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }

  setSidebarOpen(open: boolean): void {
    this.sidebarOpen.set(open);
  }

  setActiveNav(path: string): void {
    this.activeNav.set(path);
  }
}
