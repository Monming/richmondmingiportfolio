import { Injectable, signal, computed } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSignal = signal<Theme>(this.getStoredTheme());

  readonly theme = this.themeSignal.asReadonly();
  readonly isDark = computed(() => this.themeSignal() === 'dark');

  constructor() {
    this.applyTheme(this.themeSignal());
  }

  toggleTheme(): void {
    const next = this.themeSignal() === 'dark' ? 'light' : 'dark';
    this.themeSignal.set(next);
    this.applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
    this.applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  private getStoredTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'dark';
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }
}
