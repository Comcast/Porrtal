import { Icon } from '@blueprintjs/core';
import styles from './logger-banner.module.scss';

/* eslint-disable-next-line */
export interface LoggerBannerProps {}

export function LoggerBanner(props: LoggerBannerProps) {
  return (
    <Icon icon="notifications" />
  );
}

export default LoggerBanner;
