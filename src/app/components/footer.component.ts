import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiText } from '../content/ui-text.enums';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: 'footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly text = UiText;
}
