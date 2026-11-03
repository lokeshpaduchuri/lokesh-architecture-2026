import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card.component';
import { ProjectModalComponent } from '../../components/project-modal.component';
import { SeoService } from '../../core/seo.service';
import { PROFILE } from '../../data/profile.data';
import { findProjectBySlug, PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/resume.models';
import { UiText } from '../../content/ui-text.enums';

@Component({
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ProjectModalComponent],
  templateUrl: 'work.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPage {
  readonly text = UiText;
  private readonly seo = inject(SeoService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly projects = PROJECTS;
  readonly tags = Array.from(new Set(PROJECTS.map((project) => project.category))).sort();
  activeTag: string = UiText.All;
  selectedProject?: Project;

  get filteredProjects(): Project[] {
    return this.activeTag === UiText.All
      ? this.projects
      : this.projects.filter((project) => project.category === this.activeTag);
  }

  constructor() {
    this.seo.update({
      title: 'Work | Lokesh Paduchuri',
      description: UiText.WorkSeoDescription,
      canonicalPath: '/work',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${PROFILE.name} selected architecture work`,
      itemListElement: PROJECTS.map((project, index) => ({
        '@type': 'CreativeWork',
        position: index + 1,
        name: project.title,
        description: project.summary,
        url: PROFILE.siteUrl + '/work?project=' + project.slug,
      })),
    });

    this.route.queryParamMap.subscribe((params) => {
      const slug = params.get('project');
      this.selectedProject = slug ? findProjectBySlug(slug) : undefined;
      this.changeDetectorRef.markForCheck();
    });
  }

  openProject(project: Project): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { project: project.slug },
      queryParamsHandling: 'merge',
    });
  }

  closeProject(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { project: null },
      queryParamsHandling: 'merge',
    });
  }
}
