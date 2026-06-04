import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { EDUCATION, EXPERIENCE, PROFILE, SKILLS } from '../../data/resume';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'resume.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumePage {
  private readonly seo = inject(SeoService);
  readonly profile = PROFILE;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly skills = SKILLS;

  constructor() {
    this.seo.update({
      title: 'Resume | Lokesh Paduchuri',
      description: 'Web resume for Lokesh Paduchuri with architecture leadership, experience, and core skills.'
    });
  }
}
