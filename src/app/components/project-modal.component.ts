import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Project } from '../models/resume.models';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'project-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectModalComponent implements AfterViewInit {
  @Input({ required: true }) project!: Project;
  @Output() modalClose = new EventEmitter<void>();
  @ViewChild('dialog') dialogRef?: ElementRef<HTMLElement>;
  imageIndex = 0;

  ngAfterViewInit(): void {
    this.dialogRef?.nativeElement.focus();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.modalClose.emit();
  }

  @HostListener('document:keydown.tab', ['$event'])
  trapFocus(event: KeyboardEvent): void {
    const dialog = this.dialogRef?.nativeElement;
    if (!dialog) return;
    const focusables = dialog.querySelectorAll<HTMLElement>('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  closeOnOverlay(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.modalClose.emit();
    }
  }

  prevImage(): void {
    this.imageIndex = (this.imageIndex - 1 + this.project.screenshots.length) % this.project.screenshots.length;
  }

  nextImage(): void {
    this.imageIndex = (this.imageIndex + 1) % this.project.screenshots.length;
  }

  copyLink(): void {
    void navigator.clipboard?.writeText(window.location.href);
  }
}
