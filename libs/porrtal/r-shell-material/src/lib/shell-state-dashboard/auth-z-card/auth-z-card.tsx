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
import styles from './auth-z-card.module.scss';
import { useShellDispatch, useShellState } from '@porrtal/r-shell';
import { Icon, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import { CardContainerProps } from '../../cards-container/cards-container';

export function AuthZCard(props: CardContainerProps) {
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
          <span>auth-z</span>
          <Icon
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
          >
            north_east
          </Icon>
        </div>
      )}
      <div className={styles['card-content-container']}>
        <div
          className={styles['pane-header']}
          style={{
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          {(props.card.data as { name: string }).name}
        </div>
        <pre>{JSON.stringify(props.card.data, null, 2)}</pre>
        <hr />
        <pre>
          {JSON.stringify(
            shellState.authZs[(props.card.data as { name: string }).name],
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
}

export default AuthZCard;
