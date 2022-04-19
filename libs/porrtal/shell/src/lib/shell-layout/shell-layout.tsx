import styles from './shell-layout.module.scss';

/* eslint-disable-next-line */
export interface ShellLayoutProps {}

export function ShellLayout(props: ShellLayoutProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['banner']}>banner</div>
      <div className={styles['nav']}>nav</div>
      <div className={styles['main']}>main</div>
      <div className={styles['right']}>right</div>
      <div className={styles['bottom']}>bottom</div>
      <div className={styles['footer']}>footer</div>
    </div>
  );
}

export default ShellLayout;
