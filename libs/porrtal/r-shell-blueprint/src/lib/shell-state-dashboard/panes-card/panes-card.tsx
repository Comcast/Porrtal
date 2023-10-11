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
import styles from './panes-card.module.scss';
import { useShellDispatch, useShellState } from '@porrtal/r-shell';
import { Icon } from '@blueprintjs/core';
import { Fragment, useRef, useState } from 'react';
import { Tooltip2 } from '@blueprintjs/popover2';
import { Pane, PaneType } from '@porrtal/r-api';
import { CardContainerProps } from '../../cards-container/cards-container';

export function PanesCard(props: CardContainerProps) {
  const shellState = useShellState();
  const shellDispatch = useShellDispatch();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  const paneArray = Object.keys(shellState.panes)
    .map((key) => shellState.panes[key as unknown as PaneType])
    .filter((pane: Pane) => pane.viewStates.length > 0)
    .sort((pane1, pane2) => pane2.viewStates.length - pane1.viewStates.length);

  return (
    <div ref={cardRef} className={styles['card-layout']}>
      {!isMaximized && (
        <div className={styles['card-header']}>
          <span>panes</span>
          <Icon
            icon="arrow-top-right"
            onClick={() => {
              if (cardRef.current) {
                shellDispatch({
                  type: 'maximize',
                  htmlEl: cardRef.current,
                  maximizeText: `auth z: ${
                    (props.card.data as { name: string }).name
                  }`,
                  restore: () => setIsMaximized(false),
                });
                setIsMaximized(true);
              }
            }}
          ></Icon>
        </div>
      )}
      <div className={styles['card-content-container']}>
        <div className={styles['views-container']}>
          {paneArray.map((pane) => (
            <Fragment key={pane.paneType}>
              <div className={styles['pane-header']}>{pane.paneType}</div>
              {pane.viewStates.map((viewState) => (
                <Fragment key={viewState.view.viewId}>
                  <span key="launchAtStartup">
                    {viewState.view.launchAtStartup && (
                      <Icon icon="rocket-slant" />
                    )}
                  </span>

                  <span key="permissions">
                    {viewState.view.permissions && (
                      <Tooltip2 content={viewState.view.permissions}>
                        <Icon icon="lock" />
                      </Tooltip2>
                    )}
                  </span>

                  <span key="entityType">
                    {viewState.view.entityType && (
                      <Tooltip2 content={viewState.view.entityType}>
                        <Icon icon="shapes" />
                      </Tooltip2>
                    )}
                  </span>

                  <span key="viewId">{viewState.view.viewId}</span>
                </Fragment>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PanesCard;
