import styles from './logger-messages.module.scss';

/* eslint-disable-next-line */
export interface LoggerMessagesProps {}

export function LoggerMessages(props: LoggerMessagesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LoggerMessages!</h1>
    </div>
  );
}

export default LoggerMessages;
