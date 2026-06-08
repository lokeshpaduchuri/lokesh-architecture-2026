import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../models/resume.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  @Output() open = new EventEmitter<Project>();

  get metadataParts(): string[] {
    return [this.project.category, this.project.visibilityLabel, this.project.yearLabel].filter(
      (part): part is string => Boolean(part)
    );
  }

  openFromKeyboard(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.open.emit(this.project);
    }
  }
}
