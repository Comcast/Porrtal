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
import { Icon } from '@blueprintjs/core';
import { Fragment, useRef, useState } from 'react';
import { CardContainerProps } from '../../cards-container/cards-container';

export function ViewsCard(props: CardContainerProps) {
  const shellState = useShellState();
  const authZs = useAuthZsState();
  const shellDispatch = useShellDispatch();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <div ref={cardRef} className={styles['card-layout']}>
      {!isMaximized && (
        <div className={styles['card-header']}>
          <span>orphan views</span>
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
        {Object.keys(shellState.authZs)
          .filter((key) => Object.keys(authZs).every((key2) => key2 !== key))
          .map((key) => (
            <Fragment key={key}>
              <div className={styles['pane-header']}>{key}</div>
              <pre>{JSON.stringify(shellState.authZs[key], null, 2)}</pre>
            </Fragment>
          ))}
      </div>
    </div>
  );
}

export default ViewsCard;
