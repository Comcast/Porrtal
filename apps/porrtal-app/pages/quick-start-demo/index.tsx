import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface QuickStartDemoProps {}

export function QuickStartDemo(props: QuickStartDemoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to QuickStartDemo!</h1>
    </div>
  );
}

export default QuickStartDemo;
