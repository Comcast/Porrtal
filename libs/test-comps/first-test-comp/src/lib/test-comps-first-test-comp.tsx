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
          const newViewId = uuidv4();
          dispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              keyTemplate: uuidv4(),
              launchAtStartup: false,
              paneType: 'right',
              componentName: '@test-comps/first-test-comp',
              displayTextTemplate: 'one{a}{b.c}',
              displayIconTemplate: 'home',
              state: { a: ' bam!', b: { c: ' bambam!!' } },
            },
          });
          dispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch right
      </button>
      <button
        onClick={() => {
          const newViewId = uuidv4();
          dispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              keyTemplate: uuidv4(),
              launchAtStartup: false,
              paneType: 'right',
              componentName: '@test-comps/first-test-comp',
              displayTextTemplate: 'one{a}{b.c}',
              displayIconTemplate: 'home',
              state: { a: ' bam!', b: { c: ' bambam!!' } },
            },
          });
          dispatch({
            type: 'launchView',
            viewId: newViewId,
          });
          searchAction?.closeSearchDialog();
        }}
      >
        launch right and close search
      </button>

      <button
        onClick={() => {
          const newViewId = uuidv4();
          dispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              keyTemplate: uuidv4(),
              launchAtStartup: false,
              paneType: 'bottom',
              componentName: '@test-comps/first-test-comp',
              displayTextTemplate: 'one',
              displayIconTemplate: 'home',
              state: {},
            },
          });
          dispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch bottom
      </button>
      <br />
      <button
        onClick={() => {
          const newViewId = uuidv4();
          dispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              keyTemplate: '7',
              launchAtStartup: false,
              paneType: 'right',
              componentName: '@test-comps/first-test-comp',
              displayTextTemplate: 'Seven-First',
              displayIconTemplate: 'home',
              state: {},
            },
          });
          dispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch key=7 right
      </button>
      <button
        onClick={() => {
          const newViewId = uuidv4();
          dispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              keyTemplate: '7',
              launchAtStartup: false,
              paneType: 'bottom',
              componentName: '@test-comps/first-test-comp',
              displayTextTemplate: 'Seven-Bottom',
              displayIconTemplate: 'home',
              state: {},
            },
          });
          dispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch key=7 bottom
      </button>
      <br />
      <p>second component</p>
      <button
        onClick={() => {
          const newViewId = uuidv4();
          dispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              keyTemplate: '7',
              launchAtStartup: false,
              paneType: 'right',
              componentName: '@test-comps/second-test-comp',
              displayTextTemplate: 'Seven-Second',
              displayIconTemplate: 'home',
              state: {},
            },
          });
          dispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch second key=7 right
      </button>
      <button
        onClick={() => {
          const newViewId = uuidv4();
          dispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              keyTemplate: '7',
              launchAtStartup: false,
              paneType: 'bottom',
              componentName: '@test-comps/second-test-comp',
              displayTextTemplate: 'Seven-Second',
              displayIconTemplate: 'home',
              state: {},
            },
          });
          dispatch({
            type: 'launchView',
            viewId: newViewId,
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
