import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_N_INTERFACE, AuthNInterface } from '@porrtal/a-user';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss'],
})
export class Main2Component {
  accessToken = new BehaviorSubject('loading...');

  constructor(@Inject(AUTH_N_INTERFACE) private authN: AuthNInterface) {
    if (this.authN.getAccessToken) {
      this.authN.getAccessToken(['primary']).then((accessToken) => {
        console.log('main2: accessToken: ', accessToken);
        this.accessToken.next(accessToken);
      });
    }
  }
}
