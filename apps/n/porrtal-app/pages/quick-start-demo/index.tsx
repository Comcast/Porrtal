import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { ShellState } from '@porrtal/r-shell';
import { Auth0Authentication } from '@porrtal/r-user';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';
import { useEffect, useState } from 'react';
import { View } from '@porrtal/r-api';

/* eslint-disable-next-line */
export interface QuickStartDemoProps {}

export function QuickStartDemo(props: QuickStartDemoProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const views: View[] = [
    {
      displayText: 'Create Account',
      displayIcon: 'mugshot',
      componentName: 'AccountCreate',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      key: 'Account {accountId}',
      displayText: 'Account {accountId}',
      displayIcon: 'mugshot',
      componentName: 'AccountDetail',
      entityType: 'account',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      key: 'Billing {accountId}',
      displayText: 'Billing {accountId}',
      displayIcon: 'mugshot',
      componentName: 'AccountBillingHistory',
      entityType: 'account',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      key: 'AccountNav',
      launchAtStartup: true,
      displayText: 'Account Navigation',
      paneType: 'nav',
      displayIcon: 'mugshot',
      componentName: 'AccountNav',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      key: 'AccountSearch',
      launchAtStartup: true,
      displayText: 'Account',
      paneType: 'search',
      displayIcon: 'mugshot',
      componentName: 'AccountSearch',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Create Appointment',
      displayIcon: 'calendar',
      componentName: 'AppointmentCreate',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      key: 'Appointment {appointmentId}',
      displayText: 'Appointment {appointmentId}',
      displayIcon: 'calendar',
      componentName: 'AppointmentDetail',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      key: 'AppointmentLocationMap {appointmentId}',
      displayText: 'Map {appointmentId}',
      displayIcon: 'calendar',
      componentName: 'AppointmentLocationMap',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      key: 'AppointmentNav',
      launchAtStartup: true,
      displayText: 'Appointment Navigation',
      paneType: 'nav',
      displayIcon: 'calendar',
      componentName: 'AppointmentNav',
      componentModule: () => {
        console.log('appointment nav component module function called...');
        return import('@porrtal-components/r-quick-start-demo');
      },
    },
    {
      key: 'AppointmentSearch',
      launchAtStartup: true,
      displayText: 'Appointment',
      paneType: 'search',
      displayIcon: 'calendar',
      componentName: 'AppointmentSearch',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      key: 'AppointmentNav',
      launchAtStartup: true,
      displayText: 'Appointment Navigation',
      paneType: 'nav',
      displayIcon: 'calendar',
      componentName: 'AppointmentNav',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      key: 'VizNav',
      launchAtStartup: true,
      displayText: 'Viz Demos',
      paneType: 'nav',
      displayIcon: 'map',
      componentName: 'VizNav',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Buildings',
      displayIcon: 'office',
      componentName: 'BuildingSceneWithQuery',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Earth',
      displayIcon: 'globe',
      componentName: 'DigitalElevationMap',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Hurricane',
      displayIcon: 'git-commit',
      componentName: 'HurricaneMap',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Earthquake',
      displayIcon: 'inner-join',
      componentName: 'EarthquakeMap',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Collapse Tree Chart',
      displayIcon: 'diagram-tree',
      componentName: 'CollapsibleTree',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Bar Chart',
      displayIcon: 'diagram-tree',
      componentName: 'HierarchicalBarChart',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Icicle Chart',
      displayIcon: 'diagram-tree',
      componentName: 'ZoomableIcicle',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Sunburst Chart',
      displayIcon: 'diagram-tree',
      componentName: 'ZoomableSunburst',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Treemap Chart',
      displayIcon: 'diagram-tree',
      componentName: 'ZoomableTreemap',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
    {
      displayText: 'Circle Pack Chart',
      displayIcon: 'diagram-tree',
      componentName: 'ZoomableCirclePack',
      componentModule: () => import('@porrtal-components/r-quick-start-demo'),
    },
  ];

  if (!isSSR) {
    return (
      <Auth0Authentication
        domain="dev-b6h3bfnp.us.auth0.com"
        clientId="uP4eHSspiDjg6E7GKU5LjdFPn0WwEKTq"
        redirectUri="http://localhost:4200"
      >
        <ShellState views={views}>
          <ShellBlueprint />
        </ShellState>
      </Auth0Authentication>
    );
  }

  return <div>loading....</div>;
}

export default QuickStartDemo;
