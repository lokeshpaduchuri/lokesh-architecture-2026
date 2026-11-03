import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { PROFILE } from '../../data/profile.data';
import { UiText } from '../../content/ui-text.enums';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: 'contact.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  readonly text = UiText;
  private readonly seo = inject(SeoService);
  readonly profile = PROFILE;

  constructor() {
    this.seo.update({
      title: 'Contact | Lokesh Paduchuri',
      description:
        'Connect with Lokesh Paduchuri about Staff, Senior Staff, and Principal-level frontend architecture opportunities or platform strategy conversations.',
      canonicalPath: '/contact',
    });
  }
}
