import { Icon } from '@mui/material';
import React, {
  ComponentType,
  LazyExoticComponent,
  useEffect,
  useState,
} from 'react';
import { PorrtalViewComponentProps, ViewState } from '@porrtal/api';
import styles from './view-host.module.scss';

/* eslint-disable-next-line */
export interface ViewHostProps {
  viewState: ViewState;
  zIndex: number;
}

export function ViewHost(props: ViewHostProps) {
  console.log(`in view host...`);
  const [DynComp, setDynComp] =
    useState<LazyExoticComponent<ComponentType<PorrtalViewComponentProps>>>();

  useEffect(() => {
    if (props.viewState.componentImport) {
      setDynComp(React.lazy(props.viewState.componentImport));
      console.log(`in view host use effect...`);
    }
  }, [props.viewState.componentImport]);
  // const DynComp = React.lazy(props.viewState.componentImport);
  // props.viewState.componentImport().then((res) => { console.log(res)});

  return (
    <div
      key={props.viewState.key}
      className={styles['container']}
      style={{ zIndex: props.zIndex }}
    >
      <h1>
        <Icon>{props.viewState.displayIcon}</Icon>
        {props.viewState.key}
      </h1>
      <p>key: {props.viewState.key}</p>
      <p>displayText: {props.viewState.displayText}</p>
      <p>displayIcon: {props.viewState.displayIcon}</p>
      {/* <DynComp viewState={props.viewState} /> */}
      <div>
        {DynComp ? (
          <DynComp viewState={props.viewState} />
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}

export default ViewHost;
