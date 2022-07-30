import styles from './appointment-nav.module.scss';

/* eslint-disable-next-line */
export interface AppointmentNavProps {}

export function AppointmentNav(props: AppointmentNavProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppointmentNav!</h1>
    </div>
  );
}

export default AppointmentNav;
