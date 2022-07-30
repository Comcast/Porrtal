import styles from './appointment-search.module.scss';

/* eslint-disable-next-line */
export interface AppointmentSearchProps {}

export function AppointmentSearch(props: AppointmentSearchProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppointmentSearch!</h1>
    </div>
  );
}

export default AppointmentSearch;
