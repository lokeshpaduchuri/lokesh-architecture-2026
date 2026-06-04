import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card.component';
import { ProjectModalComponent } from '../../components/project-modal.component';
import { SeoService } from '../../core/seo.service';
import { PROFILE } from '../../data/profile.data';
import { PROJECTS } from '../../data/projects.data';
import { APPROACH_ITEMS } from '../../data/skills.data';
import { Project } from '../../models/resume.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent, ProjectModalComponent, RevealDirective],
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  private readonly seo = inject(SeoService);
  readonly profile = PROFILE;
  readonly strengths = APPROACH_ITEMS;
  readonly proofPoints = [
    '10+ years in software engineering',
    'Frontend modernization leadership',
    'Cross-team architecture governance',
    'Design systems and DevEx'
  ];
  readonly featured = PROJECTS.filter((project) => project.featured).slice(0, 3);
  selectedProject?: Project;

  constructor() {
    this.seo.update({
      title: 'Lokesh Paduchuri | Principal UI/UX & Front-End Architect',
      description:
        'Principal UI/UX and Front-End Architect focused on frontend platform architecture, design systems, performance, accessibility, governance, and developer experience.',
      canonicalPath: '/'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: PROFILE.name,
          jobTitle: PROFILE.primaryTitle,
          url: PROFILE.siteUrl
        },
        {
          '@type': 'WebSite',
          name: `${PROFILE.name} Resume on the Web`,
          url: PROFILE.siteUrl
        }
      ]
    });
  }

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = undefined;
  }
}
