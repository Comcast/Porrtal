import { Icon } from '@blueprintjs/core';
import { useEffect } from 'react';
import { useShellDispatch } from '@porrtal/r-shell';
import styles from './docs-nav.module.scss';
import { docsNavViews } from './docs-nav-views';

/* eslint-disable-next-line */
export interface DocsNavProps {}

export function DocsNav(props: DocsNavProps) {
  const shellDispatch = useShellDispatch();
  useEffect(() => {
    if (shellDispatch) {
      docsNavViews.forEach((v) => {
        shellDispatch({
          type: 'registerView',
          view: v,
        });
      });
    }
  }, [shellDispatch]);

  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Quick Start Docs</h3>
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

        {/* Create the App */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Create the App',
            })
          }
        >
          <Icon icon="clean" />
          <span style={{ marginLeft: '5px' }}>Create the App</span>
        </h4>

        {/* Create the Nav Component */}
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'Create the Nav Component',
            })
          }
        >
          <Icon icon="clean" />
          <span style={{ marginLeft: '5px' }}>Create the Nav Component</span>
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

export default DocsNav;
