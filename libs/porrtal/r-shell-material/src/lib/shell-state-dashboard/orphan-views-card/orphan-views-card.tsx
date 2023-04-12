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
import styles from './orphan-views-card.module.scss';
import { useShellState, useShellDispatch } from '@porrtal/r-shell';
import { useAuthZsState } from '@porrtal/r-user';
import { Icon } from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import { useTheme } from '@mui/material';
import { CardContainerProps } from '../../cards-container/cards-container';

export function OrphanViewsCard(props: CardContainerProps) {
  const shellState = useShellState();
  const authZs = useAuthZsState();
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
          <span>orphan views</span>
          <Icon
            onClick={() => {
              if (cardRef.current) {
                shellDispatch({
                  type: 'maximize',
                  htmlEl: cardRef.current,
                  maximizeText: `orphan views`,
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
        {Object.keys(shellState.authZs)
          .filter((key) => Object.keys(authZs).every((key2) => key2 !== key))
          .map((key) => (
            <Fragment key={key}>
              <div
                key={key}
                className={styles['pane-header']}
                style={{
                  color: theme.palette.secondary.contrastText,
                  backgroundColor: theme.palette.secondary.main,
                }}
              >
                {key}
              </div>
              <pre key={`json:${key}`}>
                {JSON.stringify(shellState.authZs[key], null, 2)}
              </pre>
            </Fragment>
          ))}
      </div>
    </div>
  );
}

export default OrphanViewsCard;
