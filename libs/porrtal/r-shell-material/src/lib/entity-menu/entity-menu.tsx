/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { Icon, Menu } from '@mui/material';
import {
  combineViewStateStateAndActionState,
  EntityMenuProps,
  replaceParameters,
  useShellDispatch,
  useShellState,
} from '@porrtal/r-shell';
import { IconMenuItem } from 'mui-nested-menu';
import { useState, MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function EntityMenu(props: EntityMenuProps) {
  const shellState = useShellState();
  const dispatch = useShellDispatch();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (
    shellState.views.filter((view) => view.entityType === props.entityType)
      .length > 1
  ) {
    return (
      <>
        <span
          id="entity-menu-trigger"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {props.children}
        </span>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
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
              const newEntityMenuText = replaceParameters(
                view.entityTypeMenuText ?? view.displayText ?? '',
                newState ?? {}
              ).replaced;
              const newDisplayIcon = replaceParameters(
                view.displayIcon ?? '',
                newState ?? {}
              ).replaced;

              return (
                <IconMenuItem
                  key={newKey}
                  leftIcon={<Icon>{newDisplayIcon}</Icon>}
                  label={newEntityMenuText}
                  onClick={() => {
                    dispatch({
                      type: 'launchView',
                      viewId: view.viewId ?? view.componentName,
                      justSetFocusIfExists: !view.entityTypeRelaunch,
                      state: newState,
                    });
                    setAnchorEl(null);
                  }}
                />
              );
            })}
        </Menu>
      </>
    );
  } else if (
    shellState.views.filter((view) => view.entityType === props.entityType)
      .length === 1
  ) {
    const view = shellState.views.filter(
      (view) => view.entityType === props.entityType
    )[0];
    return (
      <span
        onClick={() => {
          const newState = combineViewStateStateAndActionState(
            view.state,
            props.state
          );
          dispatch({
            type: 'launchView',
            viewId: view.viewId ?? view.componentName,
            state: newState,
          });
        }}
      >
        {props.children}
      </span>
    );
  } else {
    return <>{props.children}</>;
  }
}

export default EntityMenu;
