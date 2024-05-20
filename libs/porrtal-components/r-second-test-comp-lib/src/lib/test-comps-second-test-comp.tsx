/*
Copyright 2024 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
