import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'lokesh-theme';
  readonly mode = signal<ThemeMode>('dark');

  initTheme(): void {
    let resolved: ThemeMode = 'dark';
    try {
      if (localStorage.getItem(this.storageKey) === 'light') resolved = 'light';
    } catch {
      /* Keep the default theme when storage is unavailable. */
    }
    this.applyTheme(resolved);
  }

  toggleTheme(): void {
    this.applyTheme(this.mode() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(mode: ThemeMode): void {
    const root = this.document.documentElement;
    root.classList.toggle('dark', mode === 'dark');
    root.style.colorScheme = mode;
    this.mode.set(mode);
    try {
      localStorage.setItem(this.storageKey, mode);
    } catch {
      /* Theme changes still work for the current page. */
    }
  }
}
