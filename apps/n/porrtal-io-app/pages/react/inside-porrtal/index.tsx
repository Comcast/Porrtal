import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface InsidePorrtalProps {}

export function InsidePorrtal(props: InsidePorrtalProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InsidePorrtal!</h1>
    </div>
  );
}

export default InsidePorrtal;
