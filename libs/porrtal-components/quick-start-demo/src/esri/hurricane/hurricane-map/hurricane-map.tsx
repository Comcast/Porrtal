import styles from './hurricane-map.module.scss';

/* eslint-disable-next-line */
export interface HurricaneMapProps {}

export function HurricaneMap(props: HurricaneMapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HurricaneMap!</h1>
    </div>
  );
}

export default HurricaneMap;
