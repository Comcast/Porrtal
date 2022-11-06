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
        <h4
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
        </h4>

        {/* Welcome */}
        <h4
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
        </h4>

        {/* Welcome */}
        <h4
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
        </h4>

        {/* Welcome */}
        <h4
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
        </h4>
      </div>
    </div>
  );
}

export default Nav;
