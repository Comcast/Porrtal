# Create the AccountNav Component

Next, we will turn our generic React app into a Porrtal app with a simple Nav view that displays (mock) account data. We will also set the stage for developing with the [blueprint](https://blueprintjs.com/docs/) UI library.

## Install npm packages

### Install blueprint npm packages

From the terminal (in the porrtal-react-blueprint-quick-start directory):

```bash
npm install @blueprintjs/core @blueprintjs/icons @blueprintjs/popover2 --save
```

### Install porrtal npm packages

```bash
npm install @porrtal/r-api @porrtal/r-shell @porrtal/r-shell-blueprint @porrtal/r-split --save --legacy-peer-deps
```

```bash
npm install ag-grid-community ag-grid-react uuid react-measure --save --legacy-peer-deps
```

```bash
npm install @types/uuid @types/react-measure --save-dev --legacy-peer-deps
```

## Modify App.tsx

```ts
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

## Create AccountNav component

Create a folder `Account` at the same level as `App.tsx`

Create a file `AccountNav.tsx` in the `Account` folder.

```ts
export function AccountNav() {
    return (<div>Account Nav</div>);
}

export default AccountNav;
```

## Run the app

Open a terminal window, change into the application folder, and run this command:

```bash
npm start
```

## Create some mock Account data

Create a folder `Data` at the same level as `App.tsx`

Create a file `AccountData.ts` in the `Data` folder.

```ts
export const accountData = [
  {
    accountId: 1,
    name: "Bank of Big Money",
    orders: [
      {
        date: Date.now(),
        item: "Screen design",
        amount: 1000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 5,
        item: "Screen development",
        amount: 5000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 10,
        item: "Screen testing",
        amount: 3000,
      },
    ],
  },
  {
    accountId: 2,
    name: "Bill Jones",
    orders: [
      {
        date: Date.now(),
        item: "Slide development",
        amount: 1000,
      },
    ],
  },
  {
    accountId: 3,
    name: "Waffles R Us",
    orders: [
      {
        date: Date.now(),
        item: "Screen design",
        amount: 2000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 5,
        item: "Screen development",
        amount: 8000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 10,
        item: "Screen testing",
        amount: 5000,
      },
    ],
  },
  {
    accountId: 4,
    name: "Waffle House",
    orders: [
      {
        date: Date.now(),
        item: "Screen design",
        amount: 500,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 5,
        item: "Screen development",
        amount: 2000,
      },
    ],
  },
  {
    accountId: 5,
    name: "Crypto Bank",
    orders: [
      {
        date: Date.now(),
        item: "Slide work",
        amount: 1000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 5,
        item: "Computer order",
        amount: 15000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 10,
        item: "Programming",
        amount: 21000,
      },
    ],
  },
];
```

## Create AccountNav.css styles

Create a file `AccountNav.css` in the `Account` folder.

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

## Update AccountNav component

```ts
import { Icon } from "@blueprintjs/core";
import { accountData } from "../Data/AccountData";
import "./AccountNav.css"

/* eslint-disable-next-line */
export interface AccountNavProps {}

export function AccountNav(props: AccountNavProps) {

  return (
    <div className="AccountNav_container">
      <h3 className="AccountNav_title">Top Three Accounts</h3>
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
                <>
                  <p className="AccountNav_link-button">
                    <Icon icon="mugshot" />
                    <span style={{ marginLeft: "5px" }}>{acct.name}</span>
                  </p>
                  <p key={`total-${acct.accountId}`}>
                    {"$" +
                      acct.total
                        .toFixed(0)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </p>
                </>
              );
            })}
      </div>
    </div>
  );
}

export default AccountNav;
```
