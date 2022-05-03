import styles from './porrtal-user.module.scss';

/* eslint-disable-next-line */
export interface PorrtalUserProps {}

export function PorrtalUser(props: PorrtalUserProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PorrtalUser!</h1>
    </div>
  );
}

export default PorrtalUser;
