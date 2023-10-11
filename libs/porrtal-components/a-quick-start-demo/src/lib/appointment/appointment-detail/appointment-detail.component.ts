/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';
import { Appointment, appointmentData } from '../../data/appointment-data';
import * as Moment from 'moment';

@Component({
  selector: 'porrtal-appointment-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentDetailComponent {
  private _viewState?: ViewState;
  @Input() set viewState(value: ViewState | undefined) {
    console.log('appointment detail - view state', value);
    this._viewState = value;
    if (this._viewState?.state && this._viewState?.state['appointmentId']) {
      this.loading = false;
      this.appointmentId = this._viewState?.state['appointmentId'] as number;
      this.appointment = appointmentData.find(
        (appointment) => appointment.appointmentId === this.appointmentId
      );
      if (!this.appointment) {
        this.notFound = true;
      }
    }
    console.log(`loading: ${this.loading}, notFound: ${this.notFound}`);
  }
  get viewState() {
    return this._viewState;
  }

  public loading = true;
  public notFound = false;

  public Moment = Moment;
  public appointment?: Appointment;
  public appointmentId?: number;
}
