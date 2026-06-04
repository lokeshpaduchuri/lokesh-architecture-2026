import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card.component';
import { SeoService } from '../../core/seo.service';
import { PROJECTS } from '../../data/projects';
import { PROFILE, STRENGTHS } from '../../data/resume';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent, RevealDirective],
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  private readonly seo = inject(SeoService);
  readonly profile = PROFILE;
  readonly strengths = STRENGTHS;
  readonly featured = PROJECTS.filter((project) => project.featured).slice(0, 3);

  constructor() {
    this.seo.update({
      title: 'Lokesh Paduchuri | Frontend Architect',
      description: 'Staff-level frontend architect focusing on platform scale, governance, and product outcomes.'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: PROFILE.name,
          jobTitle: PROFILE.headline,
          url: 'https://example.com'
        },
        {
          '@type': 'WebSite',
          name: 'Lokesh Architecture 2026',
          url: 'https://example.com'
        }
      ]
    });
  }
}
