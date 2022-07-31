import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { ShellState } from '@porrtal/shell';
import { Auth0Authentication } from '@porrtal/user';
import { ShellBlueprint } from '@porrtal/shell-blueprint';
import { useEffect, useState } from 'react';
import { View, ViewComponentModules } from '@porrtal/api';

/* eslint-disable-next-line */
export interface QuickStartDemoProps {}

export function QuickStartDemo(props: QuickStartDemoProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const modules: ViewComponentModules = {
    '@porrtal-components/quick-start-demo': import('@porrtal-components/quick-start-demo')
  };

  const views: View[] = [
    {
      displayText: 'Create Account',
      displayIcon: 'mugshot',
      componentName: 'AccountCreate',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'Account {accountId}',
      displayText: 'Account {accountId}',
      displayIcon: 'mugshot',
      componentName: 'AccountDetail',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'Billing {accountId}',
      displayText: 'Billing {accountId}',
      displayIcon: 'mugshot',
      componentName: 'AccountBillingHistory',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'AccountNav',
      launchAtStartup: true,
      displayText: 'Account Navigation',
      paneType: 'nav',
      displayIcon: 'mugshot',
      componentName: 'AccountNav',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'AccountSearch',
      launchAtStartup: true,
      displayText: 'Account',
      paneType: 'search',
      displayIcon: 'mugshot',
      componentName: 'AccountSearch',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Create Appointment',
      displayIcon: 'calendar',
      componentName: 'AppointmentCreate',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'Appointment {appointmentId}',
      displayText: 'Appointment {appointmentId}',
      displayIcon: 'calendar',
      componentName: 'AppointmentDetail',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'AppointmentLocationMap {appointmentId}',
      displayText: 'Map {appointmentId}',
      displayIcon: 'calendar',
      componentName: 'AppointmentLocationMap',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'AppointmentNav',
      launchAtStartup: true,
      displayText: 'Appointment Navigation',
      paneType: 'nav',
      displayIcon: 'calendar',
      componentName: 'AppointmentNav',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'AppointmentSearch',
      launchAtStartup: true,
      displayText: 'Appointment',
      paneType: 'search',
      displayIcon: 'calendar',
      componentName: 'AppointmentSearch',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'AppointmentNav',
      launchAtStartup: true,
      displayText: 'Appointment Navigation',
      paneType: 'nav',
      displayIcon: 'calendar',
      componentName: 'AppointmentNav',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      key: 'VizNav',
      launchAtStartup: true,
      displayText: 'Viz Demos',
      paneType: 'nav',
      displayIcon: 'map',
      componentName: 'VizNav',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Buildings',
      displayIcon: 'office',
      componentName: 'BuildingSceneWithQuery',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Earth',
      displayIcon: 'globe',
      componentName: 'DigitalElevationMap',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Hurricane',
      displayIcon: 'hurricane',
      componentName: 'HurricaneMap',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Earthquake',
      displayIcon: 'inner-join',
      componentName: 'EarthquakeMap',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Collapse Tree Chart',
      displayIcon: 'diagram-tree',
      componentName: 'CollapsibleTree',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Bar Chart',
      displayIcon: 'diagram-tree',
      componentName: 'HierarchicalBarChart',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Icicle Chart',
      displayIcon: 'diagram-tree',
      componentName: 'ZoomableIcicle',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Sunburst Chart',
      displayIcon: 'diagram-tree',
      componentName: 'ZoomableSunburst',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Treemap Chart',
      displayIcon: 'diagram-tree',
      componentName: 'ZoomableTreemap',
      moduleName: '@porrtal-components/quick-start-demo',
    },
    {
      displayText: 'Circle Pack Chart',
      displayIcon: 'diagram-tree',
      componentName: 'ZoomableCirclePack',
      moduleName: '@porrtal-components/quick-start-demo',
    },
  ];

  if (!isSSR) {
    return (
      <Auth0Authentication
        domain="dev-b6h3bfnp.us.auth0.com"
        clientId="uP4eHSspiDjg6E7GKU5LjdFPn0WwEKTq"
        redirectUri="http://localhost:4200"
      >
        <ShellState modules={modules} views={views}>
          <ShellBlueprint />
        </ShellState>
      </Auth0Authentication>
    );
  }

  return <div>loading....</div>;
}

export default QuickStartDemo;
