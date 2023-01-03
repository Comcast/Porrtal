import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNInterface, AUTH_N_INTERFACE } from '@porrtal/a-user';
import { UserLoginButtonComponent } from '../user-login-button/user-login-button.component';
import { UserLogoutButtonComponent } from '../user-logout-button/user-logout-button.component';

@Component({
  selector: 'porrtal-user-banner',
  standalone: true,
  imports: [CommonModule, UserLoginButtonComponent, UserLogoutButtonComponent],
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserBannerComponent {
  constructor(@Optional() @Inject(AUTH_N_INTERFACE) public authN: AuthNInterface) {}
}
