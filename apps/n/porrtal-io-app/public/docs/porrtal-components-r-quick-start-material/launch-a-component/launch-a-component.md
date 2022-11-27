# Launch a Component

The next step in the quick start is to show how easy it is to register a view (New Account in our case) and to launch that view from a component (AccountNav in our case).

### First, create the `NewAccount.tsx` in the Accounts folder.

```tsx
export function NewAccount() {
    return (<div>New Account</div>);
}

export default NewAccount;
```

### Next, register the view in the `App.tsx` file.

```tsx
import { View } from "@porrtal/r-api";
import { BannerData, ShellState } from "@porrtal/r-shell";
import { ShellMaterial } from "@porrtal/r-shell-material";

import "./App.css";

function App() {
  const porrtalViews: View[] = [
    {
      key: "AccountNav",
      launchAtStartup: true,
      displayText: "Account Navigation",
      paneType: "nav",
      displayIcon: "account_box",
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
  ];
  const porrtalBanner: BannerData = {
    displayText: "My Quick Start App",
    displayIcon: "construction",
    childData: []
  };
  return (
    <ShellState views={porrtalViews}>
      <ShellMaterial bannerData={porrtalBanner} />
    </ShellState>
  );
}

export default App;
```

### Add the code to launch the new account view in the `AccountNav.tsx` file.

```tsx
import { Icon } from "@mui/material";
import { useShellDispatch } from "@porrtal/r-shell";
import { Fragment } from "react";
import { accountData } from "../Data/AccountData";
import "./AccountNav.css";

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
          <Icon>add_circle</Icon>
          <span style={{ marginLeft: "5px" }}>New Account</span>
        </p>
      </div>
      <div className="AccountNav_data-container">
        {accountData
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
                <span className="AccountNav_link-button">
                  <Icon>account_box</Icon>
                  <span style={{ marginLeft: "5px" }}>{acct.name}</span>
                </span>
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

### And finally, add the styles for the New Account link to the `AccountNav.css` file.

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
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
}

.AccountNav_link-button {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto auto 1fr;
  justify-items: flex-end;
  align-items: center;
}
```

### Success !!

![launch-a-component](launch-a-component.png)
