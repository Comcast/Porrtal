import { Icon } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { ViewState } from '../use-view-states/use-view-states';
import styles from './view-host.module.scss';

/* eslint-disable-next-line */
export interface ViewHostProps {
  viewState: ViewState;
  zIndex: number;
}

export function ViewHost(props: ViewHostProps) {
  return (
    <div className={styles['container']} style={{zIndex: props.zIndex}}>
      <h1><Icon>{props.viewState.displayIcon}</Icon>{props.viewState.key}</h1>
      <p>key: {props.viewState.key}</p>
      <p>displayText: {props.viewState.displayText}</p>
      <p>displayIcon: {props.viewState.displayIcon}</p>
    </div>
  );
}

export default ViewHost;
