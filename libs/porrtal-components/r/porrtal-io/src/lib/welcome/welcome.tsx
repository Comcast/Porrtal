import styles from './welcome.module.scss';

/* eslint-disable-next-line */
export interface WelcomeProps {}

export function Welcome(props: WelcomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Welcome!</h1>
    </div>
  );
}

export default Welcome;
