import { Button } from '@blueprintjs/core';
import { EntityMenu } from '@porrtal/r-shell';
import styles from './test-comps-second-test-comp.module.scss';

/* eslint-disable-next-line */
export interface TestCompsSecondTestCompProps {}

export function TestCompsSecondTestComp(props: TestCompsSecondTestCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestCompsSecondTestComp!</h1>
      <EntityMenu entityType="account" state={{ accountId: 7 }}>
        <Button>Account entity menu</Button>
      </EntityMenu>
      <EntityMenu entityType="appointment" state={{ apptId: 25 }}>
        <Button>Appointment entity menu</Button>
      </EntityMenu>
    </div>
  );
}

export default TestCompsSecondTestComp;
