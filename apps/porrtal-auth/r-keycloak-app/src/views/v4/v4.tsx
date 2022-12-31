import styles from './v4.module.scss';

/* eslint-disable-next-line */
export interface V4Props {}

export function V4(props: V4Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to V4!</h1>
    </div>
  );
}

export default V4;
