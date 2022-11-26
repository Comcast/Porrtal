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
            const newDisplayText = replaceParameters(
              view.displayText,
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
                label={newDisplayText}
                onClick={() => {
                  dispatch({
                    type: 'launchView',
                    viewId: view.viewId ?? view.componentName,
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
}

export default EntityMenu;
