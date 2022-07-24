import {
  EntityMenuProps,
  useShellDispatch,
  useShellState,
} from '@porrtal/shell';
import { Button, IconName, Menu, MenuItem } from '@blueprintjs/core';
import { Popover2, Classes } from '@blueprintjs/popover2';
import { useState } from 'react';

export function EntityMenu(props: EntityMenuProps) {
  const shellState = useShellState();
  const dispatch = useShellDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover2 isOpen={isOpen}
      content={
        <Menu className={Classes.POPOVER2_DISMISS}>
          {shellState.views
            .filter((view) => view.entityType === props.entityType)
            .map((view) => (
              <MenuItem
                key={view.viewId}
                icon={view.displayIconTemplate as IconName}
                text={view.displayTextTemplate}
                onClick={(evt) => {
                  dispatch({
                    type: 'launchView',
                    viewId: view.viewId,
                    state: props.state,
                  });
                  setIsOpen(false);
                  evt.stopPropagation();
                }}
              />
            ))}
        </Menu>
      }
    >
      <Button onClick={(evt) => setIsOpen(true)}>
        {props.children}
        <div>{JSON.stringify(props.state)}</div>
      </Button>
    </Popover2>
  );
}

export default EntityMenu;
