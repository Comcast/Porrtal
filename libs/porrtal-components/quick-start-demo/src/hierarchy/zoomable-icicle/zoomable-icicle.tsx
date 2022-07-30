import styles from './zoomable-icicle.module.scss';

/* eslint-disable-next-line */
export interface ZoomableIcicleProps {}

export function ZoomableIcicle(props: ZoomableIcicleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ZoomableIcicle!</h1>
    </div>
  );
}

export default ZoomableIcicle;
