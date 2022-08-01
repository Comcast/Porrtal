import styles from './digital-elevation-map.module.scss';

/* eslint-disable-next-line */
export interface DigitalElevationMapProps {}

export function DigitalElevationMap(props: DigitalElevationMapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DigitalElevationMap!</h1>
    </div>
  );
}

export default DigitalElevationMap;
