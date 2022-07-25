import { useLoggerState } from '@porrtal/shell';
import styles from './logger-messages.module.scss';

/* eslint-disable-next-line */
export interface LoggerMessagesProps {}

export function LoggerMessages(props: LoggerMessagesProps) {
  const loggerState = useLoggerState();
  console.log('logger messages', loggerState);
  return (
    <div className={styles['container']}>
      Logger Entries:
      {loggerState.entries.map((entry) => (
        <div>{entry.message}</div>
      ))}
    </div>
  );
}

export default LoggerMessages;
