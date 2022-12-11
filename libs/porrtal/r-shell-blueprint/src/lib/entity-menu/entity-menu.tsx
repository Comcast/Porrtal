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
import {
  EntityMenuProps,
  useShellDispatch,
  useShellState,
  replaceParameters,
  combineViewStateStateAndActionState,
} from '@porrtal/r-shell';
import { IconName, Menu, MenuItem } from '@blueprintjs/core';
import { Popover2, Classes } from '@blueprintjs/popover2';
import { v4 as uuidv4 } from 'uuid';

export function EntityMenu(props: EntityMenuProps) {
  const shellState = useShellState();
  const dispatch = useShellDispatch();

  return (
    <Popover2
      content={
        <Menu className={Classes.POPOVER2_DISMISS}>
          {shellState.views
            .filter((view) => view.entityType === props.entityType)
            .map((view) => {
              const newState = combineViewStateStateAndActionState(
                view.state,
                props.state
              );

              const newKey = replaceParameters(
                view.key ?? uuidv4(),
                newState ?? {}
              ).replaced;
              const newDisplayText = replaceParameters(
                view.displayText,
                newState ?? {}
              ).replaced;
              const newDisplayIcon = replaceParameters(
                view.displayIcon ?? '',
                newState ?? {}
              ).replaced;

              return (
                <MenuItem
                  key={newKey}
                  icon={newDisplayIcon as IconName}
                  text={newDisplayText}
                  onClick={(evt) => {
                    dispatch({
                      type: 'launchView',
                      viewId: view.viewId ?? view.componentName,
                      state: newState,
                    });
                  }}
                />
              );
            })}
        </Menu>
      }
    >
      {props.children}
    </Popover2>
  );
}

export default EntityMenu;
