import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from '../card-container/card-container.component';
import { CardContainerService } from '../card-container/card-container.service';
import { AuthNCardComponent } from './auth-n-card/auth-n-card.component';
import {
  AuthNInterface,
  AuthZInterface,
  AUTH_N_INTERFACE,
  AUTH_Z_INTERFACE,
} from '@porrtal/a-user';

@Component({
  selector: 'porrtal-shell-state-dashboard',
  standalone: true,
  imports: [CommonModule, CardContainerComponent],
  providers: [CardContainerService],
  templateUrl: './shell-state-dashboard.component.html',
  styleUrls: ['./shell-state-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellStateDashboardComponent {
  constructor(
    public cardContainerService: CardContainerService,
    @Inject(AUTH_N_INTERFACE) private authN: AuthNInterface,
    @Inject(AUTH_Z_INTERFACE) private authZService: AuthZInterface
  ) {
    this.addMockCards();
  }

  addMockCards() {
    // authN card
    this.cardContainerService.addCard({
      type: 'authN',
      componentName: 'AuthNCardComponent',
      componentModule: () => import('./auth-n-card/auth-n-card.component'),
      data: this.authN,
    });

    // authZ cards
    console.log('auth z provider keys', Object.keys(this.authZService.authZProviders));
    Object.keys(this.authZService.authZProviders).map((key) => {
      // authZ card
      this.cardContainerService.addCard({
        type: 'authZ',
        componentName: 'AuthZCardComponent',
        componentModule: () => import('./auth-z-card/auth-z-card.component'),
        data: this.authZService.authZProviders[key],
      });
    });


    setTimeout(() => {
      this.cardContainerService.addCard({
        type: 'view',
        componentName: 'ViewCardComponent',
        componentModule: () => import('./view-card/view-card.component'),
        data: {},
      });
    }, 1000);
  }
}
