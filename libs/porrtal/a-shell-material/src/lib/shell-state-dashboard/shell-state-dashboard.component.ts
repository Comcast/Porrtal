import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from '../card-container/card-container.component';
import {
  Card,
  CardContainerService,
} from '../card-container/card-container.service';
import { AuthNCardComponent } from './auth-n-card/auth-n-card.component';
import {
  AuthNInterface,
  AuthZInterface,
  AUTH_N_INTERFACE,
  AUTH_Z_INTERFACE,
} from '@porrtal/a-user';
import { ShellStateService } from '@porrtal/a-shell';
import { startWith, map } from 'rxjs';

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
    @Inject(AUTH_Z_INTERFACE) private authZService: AuthZInterface,
    private shellStateService: ShellStateService
  ) {
    this.addMockCards();
  }

  addMockCards() {
    const cards: Card[] = [];
    const providers: string[] = Object.keys(this.authZService.authZProviders);

    // authN card
    cards.push({
      type: 'authN',
      componentName: 'AuthNCardComponent',
      componentModule: () => import('./auth-n-card/auth-n-card.component'),
      data: this.authN,
    });

    // authZ cards
    console.log('auth z provider keys', providers);
    providers.map((key) => {
      // authZ card
      cards.push({
        type: 'authZ',
        componentName: 'AuthZCardComponent',
        componentModule: () => import('./auth-z-card/auth-z-card.component'),
        data: this.authZService.authZProviders[key],
      });
    });

    cards.push({
      type: 'views',
      componentName: 'ViewsCardComponent',
      componentModule: () => import('./views-card/views-card.component'),
      data: {},
    });

    cards.push({
      type: 'panes',
      componentName: 'PaneCardComponent',
      componentModule: () => import('./pane-card/pane-card.component'),
      data: {},
    });

    this.cardContainerService.connect(
      'cards',
      this.shellStateService.select('authZs'),
      (state, authZs) => {
        const newItems = [
          ...Object.keys(authZs)
            .filter(
              (key) =>
                !authZs[key].ready &&
                !authZs[key].checkPermission &&
                !providers.some((provider) => provider === key) &&
                !cards.some((card) => card.data === key)
            )
            .map((key) => ({
              type: 'orphanAuthZ',
              componentName: 'OrphanAuthZCardComponent',
              componentModule: () =>
                import('./orphan-auth-z-card/orphan-auth-z-card.component'),
              data: key,
            })),
        ];
        cards.push(...newItems);
        return cards;
      }
    );
  }
}
