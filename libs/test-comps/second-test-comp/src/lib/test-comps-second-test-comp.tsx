import styles from './test-comps-second-test-comp.module.scss';

/* eslint-disable-next-line */
export interface TestCompsSecondTestCompProps {}

export function TestCompsSecondTestComp(props: TestCompsSecondTestCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestCompsSecondTestComp!</h1>
    </div>
  );
}

export default TestCompsSecondTestComp;
