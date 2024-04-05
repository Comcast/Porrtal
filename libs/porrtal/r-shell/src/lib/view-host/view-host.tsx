/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
import React, {
  ComponentType,
  LazyExoticComponent,
  Suspense,
  useEffect,
  useState,
} from 'react';
import { ViewComponentProps, ViewState } from '@porrtal/r-api';
import styles from './view-host.module.scss';

export interface ViewHostProps {
  viewState: ViewState;
  onTop?: boolean;
}

export function ViewHost(props: ViewHostProps) {
  console.log(`in view host...`);
  const [DynComp, setDynComp] =
    useState<LazyExoticComponent<ComponentType<ViewComponentProps>>>();

  useEffect(() => {
    if (props.viewState.componentImport) {
      setDynComp(React.lazy(props.viewState.componentImport));
      console.log(`in view host use effect...`);
    }
  }, [props.viewState.componentImport]);

  return (
    <div
      key={props.viewState.key}
      className={`${styles['container']} ${
        props.onTop ? styles['onTop'] : ''
      }`}
    >
      <div className={styles['innerContainer']}>
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
