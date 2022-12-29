import styles from './porrtal-r-user-strapi.module.scss';

/* eslint-disable-next-line */
export interface PorrtalRUserStrapiProps {}

export function PorrtalRUserStrapi(props: PorrtalRUserStrapiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PorrtalRUserStrapi!</h1>
    </div>
  );
}

export default PorrtalRUserStrapi;
