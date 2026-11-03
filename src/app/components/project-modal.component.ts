import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { Project } from '../models/resume.models';
import { UiText } from '../content/ui-text.enums';
import { ArchitectureImageComponent } from './architecture-image.component';
import { resolveProjectImage } from '../data/project-images.data';
import { ImageAsset } from '../models/image-asset.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, ArchitectureImageComponent],
  templateUrl: 'project-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectModalComponent implements AfterViewInit, OnDestroy {
  readonly text = UiText;

  get visualDescription(): string {
    return (
      this.project.screenshotDescriptions?.[this.imageIndex] ??
      `${this.project.title} ${UiText.VisualDescription} ${this.imageIndex + 1}`
    );
  }
  private readonly returnFocus =
    document.activeElement instanceof HTMLElement ? document.activeElement : undefined;
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  @Input({ required: true }) project!: Project;
  @Output() modalClose = new EventEmitter<void>();
  @ViewChild('dialog') dialogRef?: ElementRef<HTMLElement>;
  imageIndex = 0;
  copyStatus: 'idle' | 'copied' | 'failed' = 'idle';

  get activeImage(): ImageAsset {
    return resolveProjectImage(this.project.screenshots[this.imageIndex]);
  }

  get narrativeSections(): Array<{ title: string; items: string[] }> {
    return [
      { title: UiText.Constraints, items: this.project.challenge },
      { title: UiText.MyRole, items: this.project.leadershipApproach },
      { title: UiText.ArchitectureDecisions, items: this.project.architectureDecision },
      { title: UiText.Implementation, items: this.project.implementation },
      ...(this.project.supportingSections ?? []),
      { title: UiText.Results, items: this.project.outcomes },
      { title: UiText.Lessons, items: this.project.lessons },
    ];
  }

  get publicLinks() {
    return this.project.links.filter((link) => link.public);
  }

  get metadataParts(): string[] {
    return [this.project.category, this.project.visibilityLabel, this.project.yearLabel].filter(
      (part): part is string => Boolean(part),
    );
  }

  ngAfterViewInit(): void {
    this.dialogRef?.nativeElement.focus();
  }

  ngOnDestroy(): void {
    if (this.returnFocus?.isConnected) this.returnFocus.focus({ preventScroll: true });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.modalClose.emit();
  }

  @HostListener('document:keydown', ['$event'])
  trapFocus(event: KeyboardEvent): void {
    if (event.key !== 'Tab') return;
    const dialog = this.dialogRef?.nativeElement;
    if (!dialog) return;
    const focusables = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement;

    if (!dialog.contains(active) || active === dialog) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && active === first) {
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
    this.imageIndex =
      (this.imageIndex - 1 + this.project.screenshots.length) % this.project.screenshots.length;
  }

  nextImage(): void {
    this.imageIndex = (this.imageIndex + 1) % this.project.screenshots.length;
  }

  async copyLink(): Promise<void> {
    const url = window.location.href;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else if (!this.copyWithFallback(url)) {
        throw new Error('Clipboard unavailable');
      }

      this.copyStatus = 'copied';
      this.changeDetectorRef.markForCheck();
      window.setTimeout(() => {
        this.copyStatus = 'idle';
        this.changeDetectorRef.markForCheck();
      }, 1800);
    } catch {
      this.copyStatus = 'failed';
      this.changeDetectorRef.markForCheck();
    }
  }

  private copyWithFallback(value: string): boolean {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy');
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
