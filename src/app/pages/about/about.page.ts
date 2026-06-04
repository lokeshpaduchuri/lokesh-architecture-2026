import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';

@Component({
  standalone: true,
  templateUrl: 'about.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPage {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'About | Lokesh Paduchuri',
      description: 'Principles and process behind staff-level frontend architecture leadership.'
    });
  }
}
