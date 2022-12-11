/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { useDebouncedSearchText } from '@porrtal/r-shell';
import { ViewComponentProps } from '@porrtal/r-api';
import { accountData } from '../../data/account-data';
import styles from './account-search.module.scss';
import Moment from 'moment';

export function AccountSearch(props: ViewComponentProps) {
  const searchText = useDebouncedSearchText();
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Account Search: {searchText}</h3>
      <div className={styles['data-container']}>
        {accountData
          .filter((account) => {
            return (
              JSON.stringify(account)
                .toLowerCase()
                .indexOf(searchText.toLowerCase()) >= 0
            );
          })
          .map((account) => (
            <>
              <div>{account.name}</div>
              <div className={styles['orders-data-container']}>
                {account?.orders.map((order) => (
                  <>
                    <span>{order.item}</span>
                    <span>
                      {'$' +
                        order.amount
                          .toFixed(0)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </span>
                    <span>{Moment(order.date).format('YYYY-DD-MM')}</span>
                  </>
                ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default AccountSearch;
