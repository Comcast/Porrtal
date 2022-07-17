import { ViewState } from '@porrtal/api';
import {
  useDebouncedSearchText,
  useSearchAction,
  useShellDispatch,
} from '@porrtal/shell';
import styles from './test-comps-first-test-comp.module.scss';
import { v4 as uuidv4 } from 'uuid';

export interface TestCompsFirstTestCompProps {
  viewState: ViewState;
}

export function TestCompsFirstTestComp(props: TestCompsFirstTestCompProps) {
  const dispatch = useShellDispatch();
  const searchAction = useSearchAction();
  const searchText = useDebouncedSearchText();
  console.log('test comp', props.viewState.key, searchText);

  return (
    <div className={styles['container']}>
      <h1>Welcome to TestCompsFirstTestComp!</h1>
      <button
        onClick={() => {
          dispatch({
            type: 'launchViewState',
            viewState: {
              key: uuidv4(),
              paneType: 'right',
              componentName: '@test-comps/first-test-comp',
              displayText: 'one{a}{b.c}',
              displayIcon: 'home',
              state: { a: ' bam!', b: { c: ' bambam!!' } },
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
              paneType: 'right',
              componentName: '@test-comps/first-test-comp',
              displayText: 'one{a}{b.c}',
              displayIcon: 'home',
              state: { a: ' bam!', b: { c: ' bambam!!' } },
            },
          });
          searchAction?.closeSearchDialog();
        }}
      >
        launch right and close search
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'launchViewState',
            viewState: {
              key: uuidv4(),
              paneType: 'bottom',
              componentName: '@test-comps/first-test-comp',
              displayText: 'one',
              displayIcon: 'home',
            },
          });
        }}
      >
        launch bottom
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({
            type: 'launchViewState',
            viewState: {
              key: '7',
              paneType: 'right',
              componentName: '@test-comps/first-test-comp',
              displayText: 'Seven-First',
              displayIcon: 'home',
            },
          });
        }}
      >
        launch key=7 right
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'launchViewState',
            viewState: {
              key: '7',
              paneType: 'bottom',
              componentName: '@test-comps/first-test-comp',
              displayText: 'Seven-First',
              displayIcon: 'home',
            },
          });
        }}
      >
        launch key=7 bottom
      </button>
      <br />
      <p>second component</p>
      <button
        onClick={() => {
          dispatch({
            type: 'launchViewState',
            viewState: {
              key: '7',
              paneType: 'right',
              componentName: '@test-comps/second-test-comp',
              displayText: 'Seven-Second',
              displayIcon: 'home',
            },
          });
        }}
      >
        launch second key=7 right
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'launchViewState',
            viewState: {
              key: '7',
              paneType: 'bottom',
              componentName: '@test-comps/second-test-comp',
              displayText: 'Seven-Second',
              displayIcon: 'home',
            },
          });
        }}
      >
        launch second key=7 bottom
      </button>
      <hr />
      <div>search text: {searchText}</div>

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
