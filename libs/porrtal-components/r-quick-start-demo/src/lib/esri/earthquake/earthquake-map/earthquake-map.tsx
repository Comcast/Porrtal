import styles from './earthquake-map.module.scss';

/* eslint-disable-next-line */
export interface EarthquakeMapProps {}

export function EarthquakeMap(props: EarthquakeMapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to EarthquakeMap!</h1>
    </div>
  );
}

export default EarthquakeMap;
