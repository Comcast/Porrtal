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
import { Icon } from '@mui/material';
import { useShellDispatch } from '@porrtal/r-shell';
import styles from './logger-banner.module.scss';

/* eslint-disable-next-line */
export interface LoggerBannerProps {}

export function LoggerBanner(props: LoggerBannerProps) {
  const shellDispatch = useShellDispatch();
  return (
    <Icon
      onClick={() =>
        shellDispatch({
          type: 'launchView',
          viewId: 'logger-messages',
        })
      }
    >
      notifications
    </Icon>
  );
}

export default LoggerBanner;
