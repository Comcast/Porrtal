import { Icon } from '@mui/material';
import { useShellDispatch } from '@porrtal/shell';
import styles from './logger-banner.module.scss';

/* eslint-disable-next-line */
export interface LoggerBannerProps {}

export function LoggerBanner(props: LoggerBannerProps) {
  const shellDispatch = useShellDispatch();
  return (
    <Icon onClick={() => shellDispatch({
      type: 'launchView',
      viewId: 'logger-messages'
    })}>
      notifications
    </Icon>
  );
}

export default LoggerBanner;
