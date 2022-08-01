import styles from './building-scene-with-query.module.scss';

/* eslint-disable-next-line */
export interface BuildingSceneWithQueryProps {}

export function BuildingSceneWithQuery(props: BuildingSceneWithQueryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BuildingSceneWithQuery!</h1>
    </div>
  );
}

export default BuildingSceneWithQuery;
