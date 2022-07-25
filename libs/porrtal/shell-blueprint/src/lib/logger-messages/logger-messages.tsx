import { ViewComponentProps } from '@porrtal/api';
import { useLoggerState } from '@porrtal/shell';
import styles from './logger-messages.module.scss';

export function LoggerMessages(props: ViewComponentProps) {
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
