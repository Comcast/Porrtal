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
    console.log(`loading: ${this.loading}, notFound: ${this.notFound}`)
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
