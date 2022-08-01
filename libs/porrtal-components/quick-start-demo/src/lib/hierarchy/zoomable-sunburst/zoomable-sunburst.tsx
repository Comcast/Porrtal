import styles from './zoomable-sunburst.module.scss';

/* eslint-disable-next-line */
export interface ZoomableSunburstProps {}

export function ZoomableSunburst(props: ZoomableSunburstProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ZoomableSunburst!</h1>
    </div>
  );
}

export default ZoomableSunburst;
