import { ViewComponentProps } from '@porrtal/api';
import styles from './logger-messages.module.scss';

export function LoggerMessages(props: ViewComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LoggerMessages!</h1>
    </div>
  );
}

export default LoggerMessages;
