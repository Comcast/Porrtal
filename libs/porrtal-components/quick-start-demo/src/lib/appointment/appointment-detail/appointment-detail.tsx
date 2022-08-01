import { ViewComponentProps } from '@porrtal/api';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import {
  Appointment,
  AppointmentData,
  fetchAppointmentData,
} from '../../data/appointment-data';
import styles from './appointment-detail.module.scss';

export function AppointmentDetail(props: ViewComponentProps) {
  const [appointmentData, setAppointmentData] = useState<AppointmentData>();
  const [appointment, setAppointment] = useState<
    Appointment | null | undefined
  >();
  useEffect(() => {
    fetchAppointmentData(500).then((d) => {
      setAppointmentData(d);
      const currentAppointment = d?.find(
        (appt) =>
          appt.appointmentId === props.viewState?.state?.['appointmentId']
      );
      setAppointment(currentAppointment);
    });
  }, [props.viewState]);

  if (appointment === undefined) {
    return <div>loading appointment data...</div>;
  }

  if (appointment === null) {
    return (
      <div>
        <span>appointmentId:&nbsp;</span>
        <span>{`${props.viewState?.state?.['appointmentId']}`}</span>
        <span>&nbsp;not found.</span>
      </div>
    );
  }

  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>
        {appointment?.item} ({appointment?.appointmentId}) - Appointment Detail
      </h3>
      <div className={styles['data-container']}>
        <h4>{Moment(appointment.date).format('YYYY-MM-DD, h:mm a')} - {appointment.duration / (1000 * 60)} minutes.</h4>
        <p>{appointment.description}</p>
      </div>
    </div>
  );
}

export default AppointmentDetail;
