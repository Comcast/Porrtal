import { Icon } from '@blueprintjs/core';
import { EntityMenu, useShellDispatch } from '@porrtal/shell';
import { useEffect, useState } from 'react';
import { AccountData, fetchAccountData } from '../../data/account-data';
import styles from './account-nav.module.scss';

/* eslint-disable-next-line */
export interface AccountNavProps {}

export function AccountNav(props: AccountNavProps) {
  const [accountData, setAccountData] = useState<AccountData>();
  useEffect(() => {
    fetchAccountData(500).then((d) => setAccountData(d));
  }, []);
  const shellDispatch = useShellDispatch();
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
                  <EntityMenu
                    key={`menu-${acct.accountId}`}
                    entityType="account"
                    state={{ accountId: acct.accountId }}
                  >
                    <p className={styles['link-button']}>
                      <Icon icon="mugshot" />
                      <span style={{ marginLeft: '5px' }}>{acct.name}</span>
                    </p>
                  </EntityMenu>
                  <p key={`total-${acct.accountId}`}>
                    {'$' +
                      acct.total
                        .toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </p>
                </>
              );
            })}
        {!accountData && <div>loading data...</div>}
      </div>
    </div>
  );
}

export default AccountNav;
