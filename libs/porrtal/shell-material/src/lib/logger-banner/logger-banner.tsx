import { Icon } from '@mui/material';
import styles from './logger-banner.module.scss';

/* eslint-disable-next-line */
export interface LoggerBannerProps {}

export function LoggerBanner(props: LoggerBannerProps) {
  return (
    <Icon>notifications</Icon>
  );
}

export default LoggerBanner;
