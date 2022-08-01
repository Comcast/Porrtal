import { ViewComponentProps } from '@porrtal/api';
import { useEffect, useState } from 'react';
import {
  Account,
  AccountData,
  fetchAccountData,
} from '../../data/account-data';
import styles from './account-detail.module.scss';
import Moment from 'moment';

export function AccountDetail(props: ViewComponentProps) {
  const [accountData, setAccountData] = useState<AccountData>();
  const [account, setAccount] = useState<Account | null | undefined>();
  useEffect(() => {
    fetchAccountData(500).then((d) => {
      setAccountData(d);
      const currentAccount = d?.find(
        (acct) => acct.accountId === props.viewState?.state?.['accountId']
      );
      setAccount(currentAccount ?? null);
    });
  }, [props.viewState]);

  if (account === undefined) {
    return <div>loading account data...</div>;
  }

  if (account === null) {
    return (
      <div>
        <span>accountId:&nbsp;</span>
        <span>{`${props.viewState?.state?.['accountId']}`}</span>
        <span>&nbsp;not found.</span>
      </div>
    );
  }

  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>
        {account?.name} ({account?.accountId}) - Account Detail
      </h3>
      <div className={styles['data-container']}>
        {account?.orders.map(order => (
          <>
            <span>{order.item}</span>
            <span>{'$' + order.amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
            <span>{Moment(order.date).format('YYYY-DD-MM')}</span>
          </>
        ))}
      </div>
    </div>
  );
}

export default AccountDetail;
