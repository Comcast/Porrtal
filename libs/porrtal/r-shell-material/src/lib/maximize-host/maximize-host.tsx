import { Icon } from '@mui/material';
import { useTheme } from '@mui/material';
import { useShellDispatch } from '@porrtal/r-shell';
import { MaximizeHostProps } from '@porrtal/r-shell';
import { useEffect, useRef } from 'react';

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
import styles from './maximize-host.module.scss';

export function MaximizeHost(props: MaximizeHostProps) {
  const maximizeHostRef = useRef<HTMLDivElement>(null);
  const shellDispatch = useShellDispatch();
  const theme = useTheme();

  useEffect(() => {
    if (props.htmlEl && maximizeHostRef.current) {
      maximizeHostRef.current.appendChild(props.htmlEl);
    }
  }, [props.htmlEl, maximizeHostRef.current]);

  return (
    <div
      className={styles['container']}
      style={{
        zIndex: props.zIndex,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <div
        className={styles['header']}
        style={{
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <div>{props.maximizeText}</div>
        <Icon
          onClick={() => {
            shellDispatch({
              type: 'restoreMaximized',
            });
            props.restore?.();
          }}
        >close_fullscreen</Icon>
      </div>
      {/* </mat-toolbar> */}
      <div className={styles['content']}>
        <div ref={maximizeHostRef} className={styles['maximize-host']}></div>
      </div>
    </div>
  );
}
