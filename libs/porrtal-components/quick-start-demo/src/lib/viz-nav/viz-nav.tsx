import styles from './viz-nav.module.scss';

/* eslint-disable-next-line */
export interface VizNavProps {}

export function VizNav(props: VizNavProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to VizNav!</h1>
    </div>
  );
}

export default VizNav;
