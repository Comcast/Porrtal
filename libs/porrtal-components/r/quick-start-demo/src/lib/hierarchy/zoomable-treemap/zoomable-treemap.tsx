import styles from './zoomable-treemap.module.scss';

/* eslint-disable-next-line */
export interface ZoomableTreemapProps {}

export function ZoomableTreemap(props: ZoomableTreemapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ZoomableTreemap!</h1>
    </div>
  );
}

export default ZoomableTreemap;
