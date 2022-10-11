import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface QuickStartProps {}

export function QuickStart(props: QuickStartProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to porrtal.io/react/quick-start!</h1>
    </div>
  );
}

export default QuickStart;
