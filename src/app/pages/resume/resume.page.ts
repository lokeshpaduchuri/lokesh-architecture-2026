import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { EDUCATION, EXPERIENCE } from '../../data/experience.data';
import { CONTACT_LINKS, PROFILE } from '../../data/profile.data';
import { CORE_STRENGTHS, SKILLS } from '../../data/skills.data';
import { Experience } from '../../models/resume.models';
import { ResumeRevealDirective } from './resume-reveal.directive';

@Component({
  standalone: true,
  imports: [CommonModule, ResumeRevealDirective],
  templateUrl: 'resume.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumePage {
  private readonly seo = inject(SeoService);
  readonly profile = PROFILE;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly skills = SKILLS;
  readonly coreStrengths = CORE_STRENGTHS;
  readonly contactLinks = CONTACT_LINKS;
  showAllExpertise = false;
  expandedImpacts: Record<number, boolean> = {};

  constructor() {
    this.seo.update({
      title: 'Resume | Lokesh Paduchuri',
      description:
        'Web-native resume for Lokesh Paduchuri, Principal UI/UX and Front-End Architect focused on platform architecture, design systems, accessibility, performance, and developer experience.',
      canonicalPath: '/resume'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: PROFILE.name,
        jobTitle: PROFILE.primaryTitle,
        url: PROFILE.siteUrl
      }
    });
  }

  displayCompany(role: Experience): string {
    return role.usePublicCompanyName ? role.publicCompanyName : role.anonymizedCompanyName;
  }

  toggleExpertise(): void {
    this.showAllExpertise = !this.showAllExpertise;
  }

  isImpactExpanded(index: number): boolean {
    return this.expandedImpacts[index] === true;
  }

  toggleImpact(index: number): void {
    this.expandedImpacts = { ...this.expandedImpacts, [index]: !this.expandedImpacts[index] };
  }

  printResume(): void {
    window.print();
  }
}
