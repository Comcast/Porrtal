import styles from './zoomable-circle-pack.module.scss';

/* eslint-disable-next-line */
export interface ZoomableCirclePackProps {}

export function ZoomableCirclePack(props: ZoomableCirclePackProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ZoomableCirclePack!</h1>
    </div>
  );
}

export default ZoomableCirclePack;
