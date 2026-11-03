import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageAsset } from '../models/image-asset.model';

@Component({
  selector: 'app-architecture-image',
  standalone: true,
  templateUrl: 'architecture-image.component.html',
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchitectureImageComponent {
  @Input({ required: true }) image!: ImageAsset;
  @Input({ required: true }) alt!: string;
  @Input() sizes = '100vw';
}
