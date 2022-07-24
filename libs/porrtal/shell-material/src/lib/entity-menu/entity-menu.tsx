import { Icon, Menu } from '@mui/material';
import {
  EntityMenuProps,
  useShellDispatch,
  useShellState,
} from '@porrtal/shell';
import { IconMenuItem } from 'mui-nested-menu';
import { useState, MouseEvent } from 'react';

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
          .map((view) => (
            <IconMenuItem
              key={view.viewId}
              leftIcon={<Icon>{view.displayIconTemplate}</Icon>}
              label={view.displayTextTemplate}
              onClick={() => {
                dispatch({
                  type: 'launchView',
                  viewId: view.viewId,
                  state: props.state,
                });
                setAnchorEl(null);
              }}
            />
          ))}
      </Menu>
    </>
  );
}

export default EntityMenu;
