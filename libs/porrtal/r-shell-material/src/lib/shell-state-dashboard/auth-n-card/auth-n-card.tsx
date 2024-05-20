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
import styles from './auth-n-card.module.scss';
import { useShellDispatch } from '@porrtal/r-shell';
import { Icon, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import { CardContainerProps } from '../../cards-container/cards-container';

export function AuthNCard(props: CardContainerProps) {
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
          <span>auth-n</span>
          <Icon
            onClick={() => {
              if (cardRef.current) {
                shellDispatch({
                  type: 'maximize',
                  htmlEl: cardRef.current,
                  maximizeText: `auth n`,
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
        <pre>{JSON.stringify(props.card.data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default AuthNCard;
