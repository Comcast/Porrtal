import { LoginButton } from '@porrtal/user';
import { useContext } from 'react';
import { PorrtalShellState } from '../use-porrtal-shell/use-porrtal-shell';
import ViewStack from '../view-stack/view-stack';
import styles from './shell-layout.module.scss';

/* eslint-disable-next-line */
export interface ShellLayoutProps {}

export function ShellLayout(props: ShellLayoutProps) {
  const { navItems, mainItems, rightItems, bottomItems } = useContext(PorrtalShellState);
  return (
    <div className={styles['container']}>
      <div className={styles['banner']}>
        <LoginButton />
      </div>
      <div className={styles['nav']}>
        <ViewStack arrange="tabs-left" items={navItems} />
      </div>
      <div className={styles['main']}>
        <ViewStack arrange="tabs-top" items={mainItems} />
      </div>
      <div className={styles['right']}>
        <ViewStack arrange="tabs-top" items={rightItems} />
      </div>
      <div className={styles['bottom']}>
        <ViewStack arrange="tabs-top" items={bottomItems} />
      </div>
      <div className={styles['footer']}>footer</div>
    </div>
  );
}

export default ShellLayout;
