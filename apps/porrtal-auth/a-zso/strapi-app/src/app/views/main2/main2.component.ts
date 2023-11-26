import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_N_INTERFACE, AuthNInterface } from '@porrtal/a-user';
import { BehaviorSubject, map, startWith } from 'rxjs';
import { PorrtalRoleService } from '@porrtal-proxy/a-my-project2';

@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss'],
})
export class Main2Component {
  accessToken = new BehaviorSubject('loading...');
  roles$;

  constructor(
    @Inject(AUTH_N_INTERFACE) private authN: AuthNInterface,
    private porrtalRoleService: PorrtalRoleService
  ) {
    if (this.authN.getAccessToken) {
      this.authN.getAccessToken(['primary']).then((accessToken) => {
        console.log('main2: accessToken: ', accessToken);
        this.accessToken.next(accessToken);
      });
    }

    this.roles$ = porrtalRoleService.getPorrtalRoles().pipe(
      map((roles) => {
        console.log('main2: roles: ', roles);
        return roles.data
          ?.sort((a, b) =>
            (a.attributes?.name ?? '').localeCompare(b.attributes?.name ?? '')
          )
          .map((role) => role.attributes?.name)
          .join(', ');
      }),
      startWith('loading...')
    );
  }
}
