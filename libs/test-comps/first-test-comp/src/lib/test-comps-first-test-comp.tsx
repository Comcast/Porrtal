import { ViewState } from 'libs/porrtal/shell/src/lib/use-view-states/use-view-states';
import styles from './test-comps-first-test-comp.module.scss';

/* eslint-disable-next-line */
export interface TestCompsFirstTestCompProps {
  viewState: ViewState;
}

export function TestCompsFirstTestComp(props: TestCompsFirstTestCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestCompsFirstTestComp!</h1>
    </div>
  );
}

export default TestCompsFirstTestComp;
