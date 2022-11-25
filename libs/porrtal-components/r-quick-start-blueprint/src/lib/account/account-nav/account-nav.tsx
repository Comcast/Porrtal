import { Icon } from '@blueprintjs/core';
import { EntityMenu, useShellDispatch } from '@porrtal/r-shell';
import { Fragment, useEffect, useState } from 'react';
import { AccountData, fetchAccountData } from '../../data/account-data';
import styles from './account-nav.module.scss';

/* eslint-disable-next-line */
export interface AccountNavProps {}

export function AccountNav(props: AccountNavProps) {
  const [accountData, setAccountData] = useState<AccountData>();
  useEffect(() => {
    fetchAccountData(0).then((d) => setAccountData(d));
  }, []);
  const shellDispatch = useShellDispatch();
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Top Three Accounts</h3>
      <div className={styles['new-account-container']}>
        <p
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({ type: "launchView", viewId: "NewAccount" })
          }
        >
          <Icon icon="add" />
          <span style={{ marginLeft: "5px" }}>New Account</span>
        </p>
      </div>
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
                <Fragment key={acct.accountId}>
                  <EntityMenu
                    entityType="account"
                    state={{ accountId: acct.accountId }}
                  >
                    <span className={styles['link-button']}>
                      <Icon icon="mugshot" />
                      <span style={{ marginLeft: '5px' }}>{acct.name}</span>
                    </span>
                  </EntityMenu>
                  <span>
                    {'$' +
                      acct.total
                        .toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </span>
                </Fragment>
              );
            })}
        {!accountData && <div>loading data...</div>}
      </div>
    </div>
  );
}

export default AccountNav;
