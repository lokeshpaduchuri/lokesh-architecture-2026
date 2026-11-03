import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer.component';
import { NavbarComponent } from './components/navbar.component';
import { ThemeService } from './core/theme.service';
import { UiText } from './content/ui-text.enums';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly text = UiText;
  private readonly theme = inject(ThemeService);

  constructor() {
    this.theme.initTheme();
  }
}
