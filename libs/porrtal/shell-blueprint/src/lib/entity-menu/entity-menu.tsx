import {
  EntityMenuProps,
  useShellDispatch,
  useShellState,
} from '@porrtal/shell';
import { IconName, Menu, MenuItem } from '@blueprintjs/core';
import { Popover2, Classes } from '@blueprintjs/popover2';

export function EntityMenu(props: EntityMenuProps) {
  const shellState = useShellState();
  const dispatch = useShellDispatch();

  return (
    <Popover2
      content={
        <Menu className={Classes.POPOVER2_DISMISS}>
          {shellState.views
            .filter((view) => view.entityType === props.entityType)
            .map((view) => (
              <MenuItem
                key={view.viewId}
                icon={view.displayIcon as IconName}
                text={view.displayText}
                onClick={(evt) => {
                  dispatch({
                    type: 'launchView',
                    viewId: view.viewId ?? view.componentName,
                    state: props.state,
                  });
                }}
              />
            ))}
        </Menu>
      }
    >
      {props.children}
    </Popover2>
  );
}

export default EntityMenu;
