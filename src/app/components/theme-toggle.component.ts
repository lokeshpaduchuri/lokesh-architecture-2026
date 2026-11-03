import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../core/theme.service';
import { UiText } from '../content/ui-text.enums';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: 'theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  readonly text = UiText;
  readonly theme = inject(ThemeService);

  get toggleLabel(): string {
    return this.theme.mode() === 'dark' ? UiText.SwitchToLight : UiText.SwitchToDark;
  }

  get themeIcon(): string {
    return this.theme.mode() === 'dark' ? UiText.Sun : UiText.Moon;
  }
}
