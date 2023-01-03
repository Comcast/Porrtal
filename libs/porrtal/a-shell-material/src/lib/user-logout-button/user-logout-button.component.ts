import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNInterface, AUTH_N_INTERFACE } from '@porrtal/a-user';

@Component({
  selector: 'porrtal-user-logout-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-logout-button.component.html',
  styleUrls: ['./user-logout-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLogoutButtonComponent {
  constructor(@Optional() @Inject(AUTH_N_INTERFACE) public authN: AuthNInterface) {}
}
