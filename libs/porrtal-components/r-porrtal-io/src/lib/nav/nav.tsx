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
import { Icon } from '@blueprintjs/core';
import { useShellDispatch } from '@porrtal/r-shell';
import styles from './nav.module.scss';

/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  const shellDispatch = useShellDispatch();
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>About @porrtal</h3>
      <div className={styles['data-container']}>
        {/* Welcome */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Welcome',
            })
          }
        >
          <Icon icon="clean" />
          <span style={{ marginLeft: '5px' }}>Welcome !!</span>
        </h4>

        {/* Features */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Features',
            })
          }
        >
          <Icon icon="clean" />
          <span style={{ marginLeft: '5px' }}>Features</span>
        </h4>

        {/* Docs */}
        {/* <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Docs',
            })
          }
        >
          <Icon icon="clean" />
          <span style={{ marginLeft: '5px' }}>Docs</span>
        </h4> */}

        {/* Getting Started */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'GettingStarted',
            })
          }
        >
          <Icon icon="clean" />
          <span style={{ marginLeft: '5px' }}>Getting Started</span>
        </h4>

        {/* Events */}
        {/* <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Events',
            })
          }
        >
          <Icon icon="clean" />
          <span style={{ marginLeft: '5px' }}>Events</span>
        </h4> */}

        {/* Resources */}
        {/* <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Resources',
            })
          }
        >
          <Icon icon="clean" />
          <span style={{ marginLeft: '5px' }}>Resources</span>
        </h4> */}

        {/* BLOG */}
        {/* <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'BLOG',
            })
          }
        >
          <Icon icon="clean" />
          <span style={{ marginLeft: '5px' }}>BLOG</span>
        </h4> */}
      </div>
    </div>
  );
}

export default Nav;
