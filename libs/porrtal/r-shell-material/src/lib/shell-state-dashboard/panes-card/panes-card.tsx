/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { Icon } from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import { Tooltip } from '@mui/material';
import { Pane, PaneType } from '@porrtal/r-api';
import { useTheme } from '@mui/material';
import { CardContainerProps } from '../../cards-container/cards-container';

export function PanesCard(props: CardContainerProps) {
  const shellState = useShellState();
  const shellDispatch = useShellDispatch();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const theme = useTheme();

  const paneArray = Object.keys(shellState.panes)
    .map((key) => shellState.panes[key as unknown as PaneType])
    .filter((pane: Pane) => pane.viewStates.length > 0)
    .sort((pane1, pane2) => pane2.viewStates.length - pane1.viewStates.length);

  return (
    <div ref={cardRef} className={styles['card-layout']}>
      {!isMaximized && (
        <div
          className={styles['card-header']}
          style={{
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <span>panes</span>
          <Icon
            onClick={() => {
              if (cardRef.current) {
                shellDispatch({
                  type: 'maximize',
                  htmlEl: cardRef.current,
                  maximizeText: `panes`,
                  restore: () => setIsMaximized(false),
                });
                setIsMaximized(true);
              }
            }}
          >
            north_east
          </Icon>
        </div>
      )}
      <div className={styles['card-content-container']}>
        <div className={styles['views-container']}>
          {paneArray.map((pane) => (
            <Fragment key={pane.paneType}>
              <div
                className={styles['pane-header']}
                style={{
                  color: theme.palette.secondary.contrastText,
                  backgroundColor: theme.palette.secondary.main,
                }}
              >
                {pane.paneType}
              </div>
              {pane.viewStates.map((viewState) => (
                <Fragment key={viewState.view.viewId}>
                  <span key="launchAtStartup">
                    {viewState.view.launchAtStartup && (
                      <Icon>rocket_launch</Icon>
                    )}
                  </span>

                  <span key="permissions">
                    {viewState.view.permissions && (
                      <Tooltip title={viewState.view.permissions}>
                        <Icon>lock</Icon>
                      </Tooltip>
                    )}
                  </span>

                  <span key="entityType">
                    {viewState.view.entityType && (
                      <Tooltip title={viewState.view.entityType}>
                        <Icon>category</Icon>
                      </Tooltip>
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
