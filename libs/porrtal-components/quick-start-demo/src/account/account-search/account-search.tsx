import styles from './account-search.module.scss';

/* eslint-disable-next-line */
export interface AccountSearchProps {}

export function AccountSearch(props: AccountSearchProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AccountSearch!</h1>
    </div>
  );
}

export default AccountSearch;
