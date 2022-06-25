import { Split } from '@porrtal/split';
import { UserBanner } from '@porrtal/user';
import { useShellComponents } from '../shell-components';
import { useShellState } from '../shell-state/shell-state';
import styles from './shell-layout-splitter.module.scss';

/* eslint-disable-next-line */
export interface ShellLayoutSplitterProps {}

export function ShellLayoutSplitter(props: ShellLayoutSplitterProps) {
  const shellState = useShellState();
  const shellComponents = useShellComponents();
  if (shellComponents && window) {
    return (
      <div className={styles['container']}>
        <div className={styles['banner']}>
          <div>image</div>
          <UserBanner />
        </div>
        <div className={styles['content']}>
          <Split initialPrimarySize="250px" resetOnDoubleClick>
            {shellState.panes.nav.viewStates.length > 0 && (
              <div className={styles['nav']}>
                <shellComponents.ViewStack pane={shellState.panes.nav} />
              </div>
            )}
            <Split horizontal initialPrimarySize="70%" resetOnDoubleClick>
              <Split initialPrimarySize="70%" resetOnDoubleClick>
                <div className={styles['main']}>
                  <shellComponents.ViewStack pane={shellState.panes.main} />
                </div>
                {shellState.panes.right.viewStates.length > 0 && (
                  <div className={styles['right']}>
                    <shellComponents.ViewStack pane={shellState.panes.right} />
                  </div>
                )}
              </Split>
              {shellState.panes.bottom.viewStates.length > 0 && (
                <div className={styles['bottom']}>
                  <shellComponents.ViewStack pane={shellState.panes.bottom} />
                </div>
              )}
            </Split>
          </Split>
        </div>
        <div className={styles['footer']}>footer</div>
      </div>
    );
  } else {
    return <div>no shell components library...</div>;
  }
}

export default ShellLayoutSplitter;
