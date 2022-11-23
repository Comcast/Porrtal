import { Split } from '@porrtal/r-split';
import { useShellComponents } from '../shell-components';
import { useShellState } from '../shell-state/shell-state';
import styles from './shell-layout-splitter.module.scss';

/* eslint-disable-next-line */
export interface ShellLayoutSplitterProps {}

export function ShellLayoutSplitter(props: ShellLayoutSplitterProps) {
  const shellState = useShellState();
  const shellComponents = useShellComponents();
  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <div className={styles['container']}>
        <div className={styles['banner']}>
          <shellComponents.Banner
            bannerData={shellComponents.bannerData}
          ></shellComponents.Banner>
          <shellComponents.LoggerBanner />
          {shellComponents.UserBanner && <shellComponents.UserBanner />}
          <shellComponents.Search />
        </div>
        <div className={styles['content']}>
          <Split initialPrimarySize="280px" resetOnDoubleClick>
            {shellState.panes.nav.viewStates.length > 0 && (
              <div className={styles['nav']}>
                <shellComponents.ViewStack
                  pane={shellState.panes.nav}
                  showUserInfo={shellState.showUserInfo}
                  showDevInfo={shellState.showDevInfo}
                />
              </div>
            )}
            <Split horizontal initialPrimarySize="70%" resetOnDoubleClick>
              <Split initialPrimarySize="70%" resetOnDoubleClick>
                <div className={styles['main']}>
                  <shellComponents.ViewStack
                    pane={shellState.panes.main}
                    showUserInfo={shellState.showUserInfo}
                    showDevInfo={shellState.showDevInfo}
                  />
                </div>
                {shellState.panes.right.viewStates.length > 0 && (
                  <div className={styles['right']}>
                    <shellComponents.ViewStack
                      pane={shellState.panes.right}
                      showUserInfo={shellState.showUserInfo}
                      showDevInfo={shellState.showDevInfo}
                    />
                  </div>
                )}
              </Split>
              {shellState.panes.bottom.viewStates.length > 0 && (
                <div className={styles['bottom']}>
                  <shellComponents.ViewStack
                    pane={shellState.panes.bottom}
                    showUserInfo={shellState.showUserInfo}
                    showDevInfo={shellState.showDevInfo}
                  />
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
