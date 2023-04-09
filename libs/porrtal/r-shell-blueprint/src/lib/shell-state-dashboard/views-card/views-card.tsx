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
import styles from './views-card.module.scss';
import { CardContainerProps, useShellState } from '@porrtal/r-shell';
import { Icon } from '@blueprintjs/core';
import { Fragment } from 'react';
import { Tooltip2 } from '@blueprintjs/popover2';

export function ViewsCard(props: CardContainerProps) {
  const shellState = useShellState();

  return (
    <div className={styles['card-layout']}>
      <div>hello from views card...</div>
      <div className={styles['card-content-container']}>
        <div className={styles['views-container']}>
          {shellState.views.map((view) => (
            <Fragment key={view.viewId}>
              <span key="launchAtStartup">
                {view.launchAtStartup && <Icon icon="rocket-slant" />}
              </span>

              <span key="permissions">
                {view.permissions && (
                  <Tooltip2 content={view.permissions}>
                    <Icon icon="lock" />
                  </Tooltip2>
                )}
              </span>

              <span key="entityType">
                {view.entityType && (
                  <Tooltip2 content={view.entityType}>
                    <Icon icon="shapes" />
                  </Tooltip2>
                )}
              </span>

              <span key="viewId">{view.viewId}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewsCard;
