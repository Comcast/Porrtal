import styles from './v3.module.scss';

/* eslint-disable-next-line */
export interface V3Props {}

export function V3(props: V3Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to V3!</h1>
    </div>
  );
}

export default V3;
