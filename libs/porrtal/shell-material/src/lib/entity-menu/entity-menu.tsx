import { Button } from '@mui/material';
import { EntityMenuProps } from '@porrtal/shell';
import styles from './entity-menu.module.scss';

export function EntityMenu(props: EntityMenuProps) {
  return (
    <Button onClick={(evt) => alert(`show menu`)}>
      {props.children}
    </Button>
  );
}

export default EntityMenu;
