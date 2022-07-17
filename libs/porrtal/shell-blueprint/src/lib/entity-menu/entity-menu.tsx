import styles from './entity-menu.module.scss';

/* eslint-disable-next-line */
export interface EntityMenuProps {}

export function EntityMenu(props: EntityMenuProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to EntityMenu!</h1>
    </div>
  );
}

export default EntityMenu;
