/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
import { ViewState } from '@porrtal/r-api';
import {
  useDebouncedSearchText,
  useSearchAction,
  useShellDispatch,
  useLoggerDispatch,
  EntityMenu,
} from '@porrtal/r-shell';
import styles from './test-comps-first-test-comp.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';

export interface TestCompsFirstTestCompProps {
  viewState: ViewState;
}

export function TestCompsFirstTestComp(props: TestCompsFirstTestCompProps) {
  const shellDispatch = useShellDispatch();
  const searchAction = useSearchAction();
  const searchText = useDebouncedSearchText();
  const loggerDispatch = useLoggerDispatch();
  const [expandSection, setExpandSection] = useState<boolean>(false);
  const refExpandSection2 = useRef<HTMLDivElement>(null);

  let expandSection2 = false;

  console.log('test comp', props.viewState.key, searchText);

  return (
    <div className={styles['container']}>
      <h1>Welcome to TestCompsFirstTestComp!</h1>
      <div>
        <button
          onClick={() => {
            setExpandSection((val) => !val);
          }}
        >
          Toggle Expansion (with state)
        </button>
        {expandSection && (
          <div>
            <p>Expanded Section</p>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            expandSection2 = !expandSection2;
            if (refExpandSection2.current) {
              refExpandSection2.current.style.display = expandSection2
                ? 'block'
                : 'none';
            }
          }}
        >
          Toggle Expansion (no state)
        </button>
        <div ref={refExpandSection2} style={{display: 'none'}}>
          <p>Expanded Section - no state</p>
        </div>
      </div>
      <button
        onClick={() => {
          const newViewId = uuidv4();
          shellDispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              key: uuidv4(),
              launchAtStartup: false,
              paneType: 'right',
              componentName: 'TestCompsFirstTestComp',
              componentModule: '@porrtal-components/r-first-test-comp-lib',
              displayText: 'one{a}{b.c}',
              displayIcon: 'home',
              state: { a: ' bam!', b: { c: ' bambam!!' } },
            },
          });
          shellDispatch({
            type: 'launchView',
            viewId: newViewId,
            state: { myProp: 'State to be passed to view instance.' },
          });
        }}
      >
        launch right
      </button>
      &nbsp;
      <button
        onClick={() => {
          const newViewId = uuidv4();
          shellDispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              key: uuidv4(),
              launchAtStartup: false,
              paneType: 'right',
              componentName: 'TestCompsFirstTestComp',
              componentModule: '@porrtal-components/r-first-test-comp-lib',
              displayText: 'one{a}{b.c}',
              displayIcon: 'home',
              state: { a: ' bam!', b: { c: ' bambam!!' } },
            },
          });
          shellDispatch({
            type: 'launchView',
            viewId: newViewId,
          });
          searchAction?.closeSearchDialog();
        }}
      >
        launch right and close search
      </button>
      &nbsp;
      <button
        onClick={() => {
          const newViewId = uuidv4();
          shellDispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              key: uuidv4(),
              launchAtStartup: false,
              paneType: 'bottom',
              componentName: 'TestCompsFirstTestComp',
              componentModule: '@porrtal-components/r-first-test-comp-lib',
              displayText: 'one',
              displayIcon: 'home',
              state: {},
            },
          });
          shellDispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch bottom
      </button>
      &nbsp;
      <br />
      <button
        onClick={() => {
          const newViewId = uuidv4();
          shellDispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              key: '7',
              launchAtStartup: false,
              paneType: 'right',
              componentName: 'TestCompsFirstTestComp',
              componentModule: '@porrtal-components/r-first-test-comp-lib',
              displayText: 'Seven-First',
              displayIcon: 'home',
              state: {},
            },
          });
          shellDispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch key=7 right
      </button>
      &nbsp;
      <button
        onClick={() => {
          const newViewId = uuidv4();
          shellDispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              key: '7',
              launchAtStartup: false,
              paneType: 'bottom',
              componentName: 'TestCompsFirstTestComp',
              componentModule: '@porrtal-components/r-first-test-comp-lib',
              displayText: 'Seven-Bottom',
              displayIcon: 'home',
              state: {},
            },
          });
          shellDispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch key=7 bottom
      </button>
      &nbsp;
      <br />
      <p>second component</p>
      <button
        onClick={() => {
          const newViewId = uuidv4();
          shellDispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              key: '7',
              launchAtStartup: false,
              paneType: 'right',
              componentName: 'TestCompsSecondTestComp',
              componentModule: '@porrtal-components/r-second-test-comp-lib',
              displayText: 'Seven-Second',
              displayIcon: 'home',
              state: {},
            },
          });
          shellDispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch second key=7 right
      </button>
      &nbsp;
      <button
        onClick={() => {
          const newViewId = uuidv4();
          shellDispatch({
            type: 'registerView',
            view: {
              viewId: newViewId,
              key: '7',
              launchAtStartup: false,
              paneType: 'bottom',
              componentName: 'TestCompsSecondTestComp',
              componentModule: '@porrtal-components/r-second-test-comp-lib',
              displayText: 'Seven-Second',
              displayIcon: 'home',
              state: {},
            },
          });
          shellDispatch({
            type: 'launchView',
            viewId: newViewId,
          });
        }}
      >
        launch second key=7 bottom
      </button>
      &nbsp;
      <hr />
      <div>search text: {searchText}</div>
      <div>state: {JSON.stringify(props.viewState?.state)}</div>
      <div style={{ marginTop: '10px', marginBottom: '10px' }}>
        <EntityMenu
          key={`menu-7`}
          entityType="appointment"
          state={{ someKey: 'someValue' }}
        >
          <span style={{ cursor: 'pointer' }}>
            {'appointment entity menu launcher'}
          </span>
        </EntityMenu>
      </div>
      <div>
        logger:&nbsp;
        <button
          onClick={() => {
            const newViewId = uuidv4();
            loggerDispatch({
              type: 'postEntry',
              entry: {
                system: 'porrtal-app',
                subsystem: 'test',
                component: 'test',
                severity: 'info',
                consumer: 'developer',
                message: 'log 1 message',
                messageDetail:
                  'this is a longer message to show how a long message looks when displayed in the logger messages component.  Here we need to make it REALLY long to see what happens if there is overflow.  Does it wrap the line?  Or do something else?  \r\n\r\n and what about new lines?',
                isRead: false,
                user: 'datumgeek',
              },
            });
            shellDispatch({
              type: 'launchView',
              viewId: newViewId,
            });
          }}
        >
          log1
        </button>
        &nbsp;
        <button
          onClick={() => {
            const newViewId = uuidv4();
            loggerDispatch({
              type: 'postEntry',
              entry: {
                system: 'porrtal-app',
                subsystem: 'test',
                component: 'test',
                severity: 'info',
                consumer: 'developer',
                message: 'log 2 message',
                messageDetail:
                  'this is a longer message to show how a long message looks when displayed in the logger messages component...',
                isRead: false,
                user: 'datumgeek',
              },
            });
            shellDispatch({
              type: 'launchView',
              viewId: newViewId,
            });
          }}
        >
          log2
        </button>
        &nbsp;
        <button
          onClick={() => {
            const newViewId = uuidv4();
            loggerDispatch({
              type: 'postEntry',
              entry: {
                system: 'porrtal-app',
                subsystem: 'test',
                component: 'test',
                severity: 'info',
                consumer: 'developer',
                message: 'log 3 message',
                messageDetail:
                  'this is a longer message to show how a long message looks when displayed in the logger messages component...',
                isRead: false,
                user: 'datumgeek',
              },
            });
            shellDispatch({
              type: 'launchView',
              viewId: newViewId,
            });
          }}
        >
          log3
        </button>
        &nbsp;
      </div>
      {['one', 'two', 'three', 'four', 'five', 'six', 'seven'].map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default TestCompsFirstTestComp;
