import styles from './v1.module.scss';

/* eslint-disable-next-line */
export interface V1Props {}

export function V1(props: V1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to V1!</h1>
    </div>
  );
}

export default V1;
