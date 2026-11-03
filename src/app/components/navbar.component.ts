import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggleComponent } from './theme-toggle.component';
import { UiText } from '../content/ui-text.enums';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ThemeToggleComponent],
  templateUrl: 'navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly text = UiText;
  @ViewChild('mobileMenu') mobileMenu?: ElementRef<HTMLElement>;
  @ViewChild('menuToggle') menuToggle?: ElementRef<HTMLButtonElement>;
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      window.setTimeout(() => this.focusFirstMenuItem());
    }
  }

  closeMenu(restoreFocus = false): void {
    this.menuOpen = false;
    if (restoreFocus) this.menuToggle?.nativeElement.focus();
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    if (this.menuOpen) this.closeMenu(true);
  }

  @HostListener('document:keydown', ['$event'])
  cycleMenuFocus(event: KeyboardEvent): void {
    if (!this.menuOpen || event.key !== 'Tab') return;
    const links = this.mobileMenu?.nativeElement.querySelectorAll<HTMLElement>('a');
    if (!links?.length) return;
    const first = links[0];
    const last = links[links.length - 1];
    const toggle = this.menuToggle?.nativeElement;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      toggle?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      toggle?.focus();
    } else if (document.activeElement === toggle) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 768) this.closeMenu();
  }

  private focusFirstMenuItem(): void {
    const firstFocusable = this.mobileMenu?.nativeElement.querySelector<HTMLElement>('a, button');
    firstFocusable?.focus();
  }
}
