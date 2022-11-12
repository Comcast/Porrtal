import styles from './events.module.scss';

/* eslint-disable-next-line */
export interface EventsProps {}

export function Events(props: EventsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Events!</h1>
    </div>
  );
}

export default Events;
