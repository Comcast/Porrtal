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
import styles from './views-card.module.scss';
import { useShellDispatch, useShellState } from '@porrtal/r-shell';
import { Icon } from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import { Tooltip } from '@mui/material';
import { useTheme } from '@mui/material';
import { CardContainerProps } from '../../cards-container/cards-container';

export function ViewsCard(props: CardContainerProps) {
  const shellState = useShellState();
  const shellDispatch = useShellDispatch();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const theme = useTheme();

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
          <span>views</span>
          <Icon
            onClick={() => {
              if (cardRef.current) {
                shellDispatch({
                  type: 'maximize',
                  htmlEl: cardRef.current,
                  maximizeText: `views`,
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
          {shellState.views.map((view) => (
            <Fragment key={view.viewId}>
              <span key={`launchAtStartup:${view.viewId}`}>
                {view.launchAtStartup && <Icon>rocket_launch</Icon>}
              </span>

              <span key={`permissions:${view.viewId}`}>
                {view.permissions && (
                  <Tooltip title={view.permissions}>
                    <Icon>lock</Icon>
                  </Tooltip>
                )}
              </span>

              <span key={`entityType:${view.viewId}`}>
                {view.entityType && (
                  <Tooltip title={view.entityType}>
                    <Icon>category</Icon>
                  </Tooltip>
                )}
              </span>

              <span key={`viewId:${view.viewId}`}>{view.viewId}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewsCard;
