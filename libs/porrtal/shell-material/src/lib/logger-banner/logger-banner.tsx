import styles from './logger-banner.module.scss';

/* eslint-disable-next-line */
export interface LoggerBannerProps {}

export function LoggerBanner(props: LoggerBannerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LoggerBanner!</h1>
    </div>
  );
}

export default LoggerBanner;
