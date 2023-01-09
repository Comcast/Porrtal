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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View } from '@porrtal/r-api';
import { ShellState } from '@porrtal/r-shell';
import { ShellMaterial } from '@porrtal/r-shell-material';
import { UserBanner } from '@porrtal/r-user';
import { Auth0Authentication } from '@porrtal/r-user-auth0';
import styles from './app.module.scss';

const views: View[] = [
  {
    viewId: 'main-view',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'MainView',
    componentModule: () => import('../views/main-view/main-view'),
    key: 'main-view',
    displayText: 'main-view',
    displayIcon: 'home',
  },
  {
    viewId: 'nav-view',
    paneType: 'nav',
    launchAtStartup: true,
    componentName: 'NavView',
    componentModule: () => import('../views/nav-view/nav-view'),
    key: 'nav-view',
    displayText: 'nav-view',
    displayIcon: 'campaign',
  },
  {
    viewId: 'profile',
    paneType: 'right',
    launchAtStartup: true,
    componentName: 'Profile',
    componentModule: () => import('../views/profile/profile'),
    key: 'profile',
    displayText: 'profile',
    displayIcon: 'account_circle',
  },
  {
    viewId: 'v1',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V1',
    componentModule: () => import('../views/v1/v1'),
    key: 'v1',
    displayText: 'v1',
    displayIcon: 'view_in_ar',
  },
  {
    viewId: 'v2',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V2',
    componentModule: () => import('../views/v2/v2'),
    key: 'v2',
    displayText: 'v2',
    displayIcon: 'view_in_ar',
  },
  {
    viewId: 'v3',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V3',
    componentModule: () => import('../views/v3/v3'),
    key: 'v3',
    displayText: 'v3',
    displayIcon: 'view_in_ar',
  },
  {
    viewId: 'v4',
    paneType: 'bottom',
    launchAtStartup: true,
    componentName: 'V4',
    componentModule: () => import('../views/v4/v4'),
    key: 'v4',
    displayText: 'v4',
    displayIcon: 'view_in_ar',
  },
];

export function App() {
  return (
    <Auth0Authentication
      domain="dev-b6h3bfnp.us.auth0.com"
      clientId="uP4eHSspiDjg6E7GKU5LjdFPn0WwEKTq"
      redirectUri="http://localhost:4200"
    >
      <ShellState views={views}>
        <ShellMaterial
          bannerData={{
            displayText: 'porrtal-auth - react - auth0',
            displayIcon: 'cyclone',
          }}
          userBanner={UserBanner}
        />
      </ShellState>
    </Auth0Authentication>
  );
}

export default App;
