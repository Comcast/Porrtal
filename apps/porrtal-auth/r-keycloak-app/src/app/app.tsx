import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { View } from '@porrtal/r-api';
import { KeycloakAuthentication } from '@porrtal/r-user-keycloak';
import { ShellState } from '@porrtal/r-shell';
import { ShellMaterial } from '@porrtal/r-shell-material';
import { UserBanner } from '@porrtal/r-user';

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
    <KeycloakAuthentication
      uri="http://localhost:8080"
      realm="porrtal"
      clientId="porrtal-app"
      redirectUri="http://localhost:4200"
    >
      <ShellState views={views}>
        <ShellMaterial
          bannerData={{
            displayText: 'porrtal-auth - react - keycloak',
            displayIcon: 'cyclone',
          }}
          userBanner={UserBanner}
        />
      </ShellState>
    </KeycloakAuthentication>
  );
}

export default App;
