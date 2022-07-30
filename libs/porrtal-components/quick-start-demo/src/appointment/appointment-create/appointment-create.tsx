import styles from './appointment-create.module.scss';

/* eslint-disable-next-line */
export interface AppointmentCreateProps {}

export function AppointmentCreate(props: AppointmentCreateProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppointmentCreate!</h1>
    </div>
  );
}

export default AppointmentCreate;
