import ShellMain from '../shell-main/shell-main';
import ShellNav from '../shell-nav/shell-nav';
import useViewStates from '../use-view-states/use-view-states';
import styles from './shell-layout.module.scss';

/* eslint-disable-next-line */
export interface ShellLayoutProps {}

export function ShellLayout(props: ShellLayoutProps) {
  const { navItems, mainItems } = useViewStates();
  return (
    <div className={styles['container']}>
      <div className={styles['banner']}>banner</div>
      <div className={styles['nav']}>
        <ShellNav items={navItems} />
      </div>
      <div className={styles['main']}>
        <ShellMain items={navItems} />
      </div>
      <div className={styles['right']}>right</div>
      <div className={styles['bottom']}>bottom</div>
      <div className={styles['footer']}>footer</div>
    </div>
  );
}

export default ShellLayout;
