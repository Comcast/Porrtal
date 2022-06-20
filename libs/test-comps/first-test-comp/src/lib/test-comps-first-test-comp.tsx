import { ViewState } from '@porrtal/api';
import { useShellDispatch } from '@porrtal/shell';
import styles from './test-comps-first-test-comp.module.scss';
import { v4 as uuidv4 } from 'uuid';

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
              key: uuidv4(),
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
              key: uuidv4(),
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
      {[
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
      ].map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default TestCompsFirstTestComp;
