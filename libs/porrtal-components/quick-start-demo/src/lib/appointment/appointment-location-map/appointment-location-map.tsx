import styles from './appointment-location-map.module.scss';

/* eslint-disable-next-line */
export interface AppointmentLocationMapProps {}

export function AppointmentLocationMap(props: AppointmentLocationMapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppointmentLocationMap!</h1>
    </div>
  );
}

export default AppointmentLocationMap;
