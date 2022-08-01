import { Icon } from '@blueprintjs/core';
import { useEffect, useState } from 'react';
import { AccountData, fetchAccountData } from '../../data/account-data';
import styles from './account-nav.module.scss';

/* eslint-disable-next-line */
export interface AccountNavProps {}

export function AccountNav(props: AccountNavProps) {
  const [accountData, setAccountData] = useState<AccountData>();
  useEffect(() => {
    fetchAccountData(4000).then((d) => setAccountData(d));
  }, []);
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Top Three Accounts</h3>
      <div className={styles['data-container']}>
        {accountData &&
          accountData
            .map((account) => {
              const total = account?.orders.reduce((accumulator, order) => {
                return accumulator + order.amount;
              }, 0);
              return {
                ...account,
                total,
              };
            })
            .sort((a, b) => b.total - a.total)
            .filter((acct, ii) => ii < 3)
            .map((acct) => {
              return (
                <>
                  <p
                    className={styles['link-button']}
                    onClick={() => alert('launch !! :)')}
                  >
                    <Icon icon="mugshot" />
                    <span style={{ marginLeft: '5px' }}>{acct.name}</span>
                  </p>
                  <p>{acct.total}</p>
                </>
              );
            })}
        {!accountData && (<div>loading data...</div>)}
      </div>
    </div>
  );
}

export default AccountNav;
