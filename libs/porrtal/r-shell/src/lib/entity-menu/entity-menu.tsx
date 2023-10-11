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
import { StateObject } from '@porrtal/r-api';
import { ReactNode } from 'react';
import { useShellComponents } from '../shell-components';
// import { useShellState } from '../shell-state/shell-state';

export interface EntityMenuProps {
  entityType: string;
  state?: StateObject;
  children: ReactNode | undefined;
}

export type EntityMenuComponent = (props: EntityMenuProps) => JSX.Element;

export function EntityMenu(props: EntityMenuProps) {
  const shellComponents = useShellComponents();
  // const shellState = useShellState();

  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <shellComponents.EntityMenu
        entityType={props.entityType}
        state={props.state}
      >
        {props.children}
      </shellComponents.EntityMenu>
    );
  } else {
    return <div></div>;
  }
}

export default EntityMenu;
