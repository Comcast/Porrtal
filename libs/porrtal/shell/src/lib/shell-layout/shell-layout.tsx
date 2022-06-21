import { useShellComponents } from '@porrtal/shell';
import { UserBanner } from '@porrtal/user';
import { useContext } from 'react';
import { ShellState, useShellState } from '../shell-state/shell-state';
import styles from './shell-layout.module.scss';

/* eslint-disable-next-line */
export interface ShellLayoutProps {}

export function ShellLayout(props: ShellLayoutProps) {
  const shellState = useShellState();
  const shellComponents = useShellComponents();
  if (shellComponents) {
    return (
      <div className={styles['container']}>
        <div className={styles['banner']}>
          <div>image</div>
          <UserBanner />
        </div>
        <div className={styles['nav']}>
          <shellComponents.ViewStack pane={shellState.panes.nav} />
        </div>
        <div className={styles['main']}>
          <shellComponents.ViewStack pane={shellState.panes.main} />
        </div>
        <div className={styles['right']}>
          <shellComponents.ViewStack pane={shellState.panes.right} />
        </div>
        <div className={styles['bottom']}>
          <shellComponents.ViewStack pane={shellState.panes.bottom} />
        </div>
        <div className={styles['footer']}>footer</div>
      </div>
    );
  } else {
    return <div>no shell components library...</div>;
  }
}

export default ShellLayout;
