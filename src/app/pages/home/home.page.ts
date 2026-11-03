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
import { UiText } from '../../content/ui-text.enums';
import { ArchitectureImageComponent } from '../../components/architecture-image.component';
import { PORTFOLIO_IMAGE } from '../../data/project-images.data';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProjectCardComponent,
    ProjectModalComponent,
    ArchitectureImageComponent,
  ],
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  readonly text = UiText;
  readonly publicProjectSlug = 'legacy-react-to-angular-20';
  readonly portfolioImage = PORTFOLIO_IMAGE;
  private readonly seo = inject(SeoService);
  readonly profile = PROFILE;
  readonly strengths = APPROACH_ITEMS;
  readonly proofPoints = [
    { value: '10+ years', label: 'Building frontend experiences' },
    { value: '15 components', label: 'Shared across three applications' },
    { value: '~40% less', label: 'Duplicate component implementation' },
    { value: '~15 developers', label: 'Adopting the human-in-the-loop AI workflow' },
  ];
  readonly featured = PROJECTS.filter((project) => project.featured).slice(0, 3);
  selectedProject?: Project;

  constructor() {
    this.seo.update({
      title: UiText.SiteTitle,
      description: UiText.SiteDescription,
      canonicalPath: '/',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: PROFILE.name,
          jobTitle: PROFILE.primaryTitle,
          url: PROFILE.siteUrl,
        },
        {
          '@type': 'WebSite',
          name: `${PROFILE.name} Resume on the Web`,
          url: PROFILE.siteUrl,
        },
      ],
    });
  }

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = undefined;
  }
}
