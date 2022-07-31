import styles from './account-detail.module.scss';

/* eslint-disable-next-line */
export interface AccountDetailProps {}

export function AccountDetail(props: AccountDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AccountDetail!</h1>
    </div>
  );
}

export default AccountDetail;
