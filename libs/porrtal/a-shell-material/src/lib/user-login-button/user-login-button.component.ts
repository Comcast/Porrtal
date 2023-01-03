import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNInterface, AUTH_N_INTERFACE } from '@porrtal/a-user';

@Component({
  selector: 'porrtal-user-login-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-login-button.component.html',
  styleUrls: ['./user-login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginButtonComponent {
  constructor(@Optional() @Inject(AUTH_N_INTERFACE) public authN: AuthNInterface) {}
}
