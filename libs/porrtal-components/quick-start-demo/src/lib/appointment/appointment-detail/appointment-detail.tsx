import styles from './appointment-detail.module.scss';

/* eslint-disable-next-line */
export interface AppointmentDetailProps {}

export function AppointmentDetail(props: AppointmentDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppointmentDetail!</h1>
    </div>
  );
}

export default AppointmentDetail;
