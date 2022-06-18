import { ViewState } from '@porrtal/api';
import { useShellDispatch } from '@porrtal/shell';
import { useContext } from 'react';
import styles from './test-comps-first-test-comp.module.scss';

/* eslint-disable-next-line */
export interface TestCompsFirstTestCompProps {
  viewState: ViewState;
}

export function TestCompsFirstTestComp(props: TestCompsFirstTestCompProps) {
  const dispatch = useShellDispatch();

  return (
    <div className={styles['container']}>
      <h1>Welcome to TestCompsFirstTestComp!</h1>
      <button
        onClick={() => {
          dispatch({
            type: 'launchViewState',
            viewState: {
              key: 'one-main',
              viewPane: 'right',
              componentName: '@test-comps/first-test-comp',
              displayText: 'one',
              displayIcon: 'home',
            },
          });
        }}
      >
        launch right
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'launchViewState',
            viewState: {
              key: 'one-main',
              viewPane: 'bottom',
              componentName: '@test-comps/first-test-comp',
              displayText: 'one',
              displayIcon: 'home',
            },
          });
        }}
      >
        launch bottom
      </button>
    </div>
  );
}

export default TestCompsFirstTestComp;
