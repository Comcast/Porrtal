import styles from './resources.module.scss';

/* eslint-disable-next-line */
export interface ResourcesProps {}

export function Resources(props: ResourcesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Resources!</h1>
    </div>
  );
}

export default Resources;
