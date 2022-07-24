import { EntityMenu } from '@porrtal/shell';
import styles from './test-comps-second-test-comp.module.scss';

/* eslint-disable-next-line */
export interface TestCompsSecondTestCompProps {}

export function TestCompsSecondTestComp(props: TestCompsSecondTestCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestCompsSecondTestComp!</h1>
      <EntityMenu entityType='account'>
        Account entity menu
      </EntityMenu>
      <EntityMenu entityType='appointment'>
        Appointment entity menu
      </EntityMenu>
    </div>
  );
}

export default TestCompsSecondTestComp;
