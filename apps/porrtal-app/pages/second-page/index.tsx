import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface SecondPageProps {}

export function SecondPage(props: SecondPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SecondPage!</h1>
    </div>
  );
}

export default SecondPage;
