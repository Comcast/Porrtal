import { Icon } from '@blueprintjs/core';
import { useShellDispatch } from '@porrtal/r-shell';
import styles from './logger-banner.module.scss';

/* eslint-disable-next-line */
export interface LoggerBannerProps {}

export function LoggerBanner(props: LoggerBannerProps) {
  const shellDispatch = useShellDispatch();
  return (
    <Icon
      icon="notifications"
      onClick={() =>
        shellDispatch({
          type: 'launchView',
          viewId: 'logger-messages',
        })
      }
    />
  );
}

export default LoggerBanner;
