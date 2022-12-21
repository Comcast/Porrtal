/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
import { Split } from '@porrtal/r-split';
import { useShellComponents } from '../shell-components';
import { useShellDispatch, useShellState } from '../shell-state/shell-state';
import styles from './shell-layout-splitter.module.scss';

/* eslint-disable-next-line */
export interface ShellLayoutSplitterProps {}

export function ShellLayoutSplitter(props: ShellLayoutSplitterProps) {
  const shellState = useShellState();
  const dispatch = useShellDispatch();
  const shellComponents = useShellComponents();
  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <div className={styles['container']}>
        <div className={styles['banner']}>
          <shellComponents.Banner
            bannerData={shellComponents.bannerData}
          ></shellComponents.Banner>
          <div className={styles['inline-banner-menu']}>
          {shellComponents.BannerMenuInline &&
            shellState.menuItems &&
            shellState.menuItems?.filter(
              (item) =>
                item.displayText === 'inline'
            ).length > 0 && (
              <shellComponents.BannerMenuInline menuItems={shellState.menuItems}></shellComponents.BannerMenuInline>
            )}
        </div>

          <shellComponents.LoggerBanner />
          {shellComponents.UserBanner && <shellComponents.UserBanner />}
          {shellState.panes.search.viewStates.length > 0 ? (
            <shellComponents.Search />
          ) : null}
        </div>
        <div className={styles['banner-menu-bar']}>
          {shellComponents.BannerMenuBar &&
            shellState.menuItems &&
            shellState.menuItems?.filter(
              (item) =>
                item.displayText !== 'inline' && item.displayText !== 'user'
            ).length > 0 && (
              <shellComponents.BannerMenuBar menuItems={shellState.menuItems}></shellComponents.BannerMenuBar>
            )}
        </div>
        <div className={styles['content']}>
          <Split
            initialPrimarySize="320px"
            primaryCollapsedSize={shellState.navWidth}
            resetOnDoubleClick
            onSplitDragStart={() =>
              dispatch({
                type: 'showNav',
              })
            }
          >
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
