# Launch a Component

The next step in the quick start is to show how easy it is to register a view (New Account in our case) and to launch that view from a component (AccountNav in our case).

First, create the `NewAccount.tsx` in the Accounts folder.

```tsx
export function NewAccount() {
    return (<div>New Account</div>);
}

export default NewAccount;
```

Next, register the view in the `App.tsx` file.

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

Add the code to launch the new account view in the `AccountNav.tsx` file.

```tsx
import { Icon } from "@blueprintjs/core";
import { accountData } from "../Data/AccountData";
import "./AccountNav.css";
import { useShellDispatch } from "@porrtal/r-shell";

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
// ...
```

And finally, add the styles for the New Account link to the `AccountNav.css` file.

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
  