import styles from './account-create.module.scss';

/* eslint-disable-next-line */
export interface AccountCreateProps {}

export function AccountCreate(props: AccountCreateProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AccountCreate!</h1>
    </div>
  );
}

export default AccountCreate;
