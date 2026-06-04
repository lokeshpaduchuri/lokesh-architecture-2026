import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/seo.service';
import { CONTACT_LINKS } from '../../data/resume';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'contact.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPage {
  private readonly seo = inject(SeoService);
  readonly links = CONTACT_LINKS;

  constructor() {
    this.seo.update({
      title: 'Contact | Lokesh Paduchuri',
      description: 'Contact details and conversation channels for frontend architecture opportunities.'
    });
  }
}
