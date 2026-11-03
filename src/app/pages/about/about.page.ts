import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { ABOUT_CONTENT } from '../../data/about.data';
import { PROFILE } from '../../data/profile.data';
import { UiText } from '../../content/ui-text.enums';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'about.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  readonly text = UiText;
  private readonly seo = inject(SeoService);
  readonly content = ABOUT_CONTENT;

  constructor() {
    this.seo.update({
      title: 'About | Lokesh Paduchuri',
      description:
        'How Lokesh Paduchuri approaches frontend architecture, platform foundations, team enablement, quality, and responsible AI-assisted engineering.',
      canonicalPath: '/about',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: PROFILE.name,
        jobTitle: PROFILE.primaryTitle,
        url: PROFILE.siteUrl,
      },
    });
  }
}
