import styles from './entity-menu.module.scss';
import { EntityMenuProps } from '@porrtal/shell';
import { Button } from '@blueprintjs/core';

export function EntityMenu(props: EntityMenuProps) {
  return (
    <Button onClick={(evt) => alert(`show menu`)}>
      {props.children}
    </Button>
  );
}

export default EntityMenu;
