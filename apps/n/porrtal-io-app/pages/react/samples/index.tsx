import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface SamplesProps {}

export function Samples(props: SamplesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Samples!</h1>
    </div>
  );
}

export default Samples;
