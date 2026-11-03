import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../models/resume.models';
import { UiText } from '../content/ui-text.enums';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly text = UiText;
  @Input({ required: true }) project!: Project;
  @Output() open = new EventEmitter<Project>();
}
