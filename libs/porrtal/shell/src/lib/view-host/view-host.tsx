import { Icon } from '@mui/material';
import React from 'react';
import { ViewState } from '@porrtal/api';
import styles from './view-host.module.scss';

/* eslint-disable-next-line */
export interface ViewHostProps {
  viewState: ViewState;
  zIndex: number;
}

export function ViewHost(props: ViewHostProps) {
  const DynComp = React.lazy(props.viewState.componentImport);
  // props.viewState.componentImport().then((res) => { console.log(res)});
  console.log(props.viewState.componentImport);
  return (
    <div key={props.viewState.key} className={styles['container']} style={{zIndex: props.zIndex}}>
      <h1><Icon>{props.viewState.displayIcon}</Icon>{props.viewState.key}</h1>
      <p>key: {props.viewState.key}</p>
      <p>displayText: {props.viewState.displayText}</p>
      <p>displayIcon: {props.viewState.displayIcon}</p>
      <DynComp viewState={props.viewState} />
    </div>
  );
}

export default ViewHost;
