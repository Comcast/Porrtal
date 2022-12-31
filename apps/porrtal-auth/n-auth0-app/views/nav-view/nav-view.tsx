import styles from './nav-view.module.scss';

/* eslint-disable-next-line */
export interface NavViewProps {}

export function NavView(props: NavViewProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NavView!</h1>
    </div>
  );
}

export default NavView;
