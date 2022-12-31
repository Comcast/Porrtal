import styles from './v2.module.scss';

/* eslint-disable-next-line */
export interface V2Props {}

export function V2(props: V2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to V2!</h1>
    </div>
  );
}

export default V2;
