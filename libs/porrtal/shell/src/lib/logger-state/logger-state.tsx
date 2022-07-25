import styles from './logger-state.module.scss';

/* eslint-disable-next-line */
export interface LoggerStateProps {}

export function LoggerState(props: LoggerStateProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LoggerState!</h1>
    </div>
  );
}

export default LoggerState;
