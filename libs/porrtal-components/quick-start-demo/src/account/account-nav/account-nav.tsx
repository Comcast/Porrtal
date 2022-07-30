import styles from './account-nav.module.scss';

/* eslint-disable-next-line */
export interface AccountNavProps {}

export function AccountNav(props: AccountNavProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AccountNav!</h1>
    </div>
  );
}

export default AccountNav;
