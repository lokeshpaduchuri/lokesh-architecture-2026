import { DOCUMENT } from '@angular/common';
import { Injectable, Renderer2, RendererFactory2, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly renderer: Renderer2;

  constructor() {
    const rendererFactory = inject(RendererFactory2);
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  update(config: SeoConfig): void {
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image ?? '/assets/images/og-default.svg' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image ?? '/assets/images/og-default.svg' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    if (config.canonicalPath) {
      this.setCanonical(config.canonicalPath);
    }
  }

  setJsonLd(schema: Record<string, unknown>): void {
    const id = 'json-ld-schema';
    const existing = this.document.getElementById(id);
    if (existing) {
      existing.remove();
    }

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    this.renderer.appendChild(this.document.head, script);
  }

  private setCanonical(path: string): void {
    const href = new URL(path, this.document.location.origin).toString();
    const existing = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const link = existing ?? this.renderer.createElement('link');

    if (!existing) {
      link.rel = 'canonical';
      this.renderer.appendChild(this.document.head, link);
    }

    link.href = href;
    this.meta.updateTag({ property: 'og:url', content: href });
  }
}
