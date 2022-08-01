import styles from './collapsible-tree.module.scss';

/* eslint-disable-next-line */
export interface CollapsibleTreeProps {}

export function CollapsibleTree(props: CollapsibleTreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CollapsibleTree!</h1>
    </div>
  );
}

export default CollapsibleTree;
