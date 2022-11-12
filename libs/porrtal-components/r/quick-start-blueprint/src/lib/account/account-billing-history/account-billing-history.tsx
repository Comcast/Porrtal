import styles from './account-billing-history.module.scss';

/* eslint-disable-next-line */
export interface AccountBillingHistoryProps {}

export function AccountBillingHistory(props: AccountBillingHistoryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AccountBillingHistory!</h1>
    </div>
  );
}

export default AccountBillingHistory;
