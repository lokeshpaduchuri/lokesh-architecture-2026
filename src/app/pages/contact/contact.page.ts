import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/seo.service';
import { CONTACT_LINKS } from '../../data/profile.data';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'contact.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPage {
  private readonly seo = inject(SeoService);
  readonly links = CONTACT_LINKS;
  readonly form = {
    name: '',
    email: '',
    message: ''
  };
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor() {
    this.seo.update({
      title: 'Contact | Lokesh Paduchuri',
      description:
        'Connect with Lokesh Paduchuri about Staff, Senior Staff, and Principal-level frontend architecture opportunities or platform strategy conversations.',
      canonicalPath: '/contact'
    });
  }

  submit(): void {
    this.status = 'loading';

    if (!this.form.name.trim() || !this.form.email.trim() || !this.form.message.trim()) {
      this.status = 'error';
      return;
    }

    this.status = 'error';
  }
}
