# Create an Entity Menu

### Create `AccountBilling.tsx` file in `Account` folder

```tsx
export function AccountBilling() {
    return (<div>Account Billing</div>);
}

export default AccountBilling;
```

### Create `AccountDetail.tsx` file in `Account` folder

```tsx
export function AccountDetail() {
    return (<div>Account Detail</div>);
}

export default AccountDetail;
```

### Register AccountBilling and AccountDetail views in `App.tsx`

```tsx
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { View } from '@porrtal/r-api';
import { BannerData, ShellState } from '@porrtal/r-shell';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';

export function Index() {

  const porrtalViews: View[] = [
    {
      key: "AccountNav",
      launchAtStartup: true,
      displayText: "Account Navigation",
      paneType: "nav",
      displayIcon: "mugshot",
      componentName: "AccountNav",
      componentModule: () => import("./Account/AccountNav"),
    },
    {
      viewId: "NewAccount",
      key: "NewAccount",
      displayText: "New Account",
      paneType: "main",
      displayIcon: "add",
      componentName: "NewAccount",
      componentModule: () => import("./Account/NewAccount"),
    },
    {
      viewId: "AccountDetail",
      key: 'Account Detail {accountId}',
      displayText: 'Account Detail {accountId}',
      paneType: "main",
      displayIcon: "mugshot",
      componentName: "AccountDetail",
      entityType: "account",
      componentModule: () => import("./Account/AccountDetail"),
    },
    {
      viewId: "AccountBilling",
      key: 'Account Billing {accountId}',
      displayText: 'Account Billing {accountId}',
      paneType: "main",
      displayIcon: "mugshot",
      componentName: "AccountBilling",
      entityType: "account",
      componentModule: () => import("./Account/AccountBilling"),
    },
  ];

  const porrtalBanner: BannerData = {
    displayText: "My Quick Start App",
    displayIcon: "build",
    childData: []
  };

  return (
    <ShellState views={porrtalViews}>
      <ShellBlueprint bannerData={porrtalBanner} />
    </ShellState>
  );
  }

export default Index;
```

### Update `AccountNav.tsx` with the EntityMenu

```tsx
import { Fragment } from "react";
import { Icon } from "@blueprintjs/core";
import { accountData } from "../Data/AccountData";
import "./AccountNav.css";
import { EntityMenu, useShellDispatch } from "@porrtal/r-shell";

/* eslint-disable-next-line */
export interface AccountNavProps {}

export function AccountNav(props: AccountNavProps) {
  const shellDispatch = useShellDispatch();
  return (
    <div className="AccountNav_container">
      <h3 className="AccountNav_title">Top Three Accounts</h3>
      <div className="AccountNav_new-account-container">
        <p
          className="AccountNav_link-button"
          onClick={() =>
            shellDispatch({ type: "launchView", viewId: "NewAccount" })
          }
        >
          <Icon icon="add" />
          <span style={{ marginLeft: "5px" }}>New Account</span>
        </p>
      </div>
      <div className="AccountNav_data-container">
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
                <Fragment key={`menu-${acct.accountId}`}>
                  <EntityMenu
                    entityType="account"
                    state={{ accountId: acct.accountId }}
                  >
                    <span className="AccountNav_link-button">
                      <Icon icon="mugshot" />
                      <span style={{ marginLeft: "5px" }}>{acct.name}</span>
                    </span>
                  </EntityMenu>
                  <span>
                    {"$" +
                      acct.total
                        .toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </span>
                </Fragment>
              );
            })}
      </div>
    </div>
  );
}

export default AccountNav;
```

### Update `AccountNav.css`

```css
.AccountNav_container {
  display: grid;
  grid-template-columns: 1fr;
}

.AccountNav_title {
  background-color: rgb(185, 199, 218);
  margin: 0;
  padding-top: 5px;
  padding-bottom: 4px;
  padding-left: 8px;
  grid-column: 1 / -1;
}

.AccountNav_new-account-container {
  margin-top: 30px;
}

.AccountNav_data-container {
  display: grid;
  grid-template-columns: 1fr auto;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
}

.AccountNav_link-button {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
```

### At this point, we can test the entity menu by clicking on the account in the Account Nav.

## Now we fill in Account Detail implementation

Next we will add detail to the Account Details page, picking up the accountId from the `state` property in the `viewState` property.

### Add `AccountDetail.css` file in `Account` folder

```css
.AccountDetail_container {
  display: grid;
  grid-template-columns: 1fr;
}

.AccountDetail_title {
  background-color: rgb(185, 199, 218);
  margin: 0;
  padding-top: 5px;
  padding-bottom: 4px;
  padding-left: 8px;
  grid-column: 1 / -1;
}

.AccountDetail_data-container {
  display: grid;
  justify-self: start;
  gap: 10px;
  grid-template-columns: auto auto auto;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
}

.AccountDetail_link-button {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
```

### Install `moment` npm package (for date / time functions)

```bash
npm install moment --save --legacy-peer-deps
```

### Update `AccountDetail.tsx` to show data for the Account

```tsx
import { Fragment } from "react";
import { ViewComponentProps } from "@porrtal/r-api";
import { accountData } from "../Data/AccountData";
import Moment from "moment";
import "./AccountDetail.css";

export function AccountDetail(props: ViewComponentProps) {
  const currentAccount = accountData.find(
    (acct) => acct.accountId === props.viewState?.state?.["accountId"]
  );

  if (currentAccount === null) {
    return (
      <div>
        <span>accountId:&nbsp;</span>
        <span>{`${props.viewState?.state?.["accountId"]}`}</span>
        <span>&nbsp;not found.</span>
      </div>
    );
  }

  return (
    <div className="AccountDetail_container">
      <h3 className="AccountDetail_title">
        {currentAccount?.name} ({currentAccount?.accountId}) - Account Detail
      </h3>
      <div className="AccountDetail_data-container">
        {currentAccount?.orders.map((order, index) => (
          <Fragment key={index}>
            <span>{order.item}</span>
            <span>
              {"$" +
                order.amount
                  .toFixed(0)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </span>
            <span>{Moment(order.date).format("YYYY-DD-MM")}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default AccountDetail;
```
