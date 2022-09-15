import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellStateService } from '@porrtal/a-shell';
import { View } from '@porrtal/a-api';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';

const views: View[] = [
  {
    displayText: 'Create Account',
    displayIcon: 'account_box',
    componentName: 'AccountCreateComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'Account {accountId}',
    displayText: 'Account {accountId}',
    displayIcon: 'account_box',
    componentName: 'AccountDetailComponent',
    entityType: 'account',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'Billing {accountId}',
    displayText: 'Billing {accountId}',
    displayIcon: 'account_box',
    componentName: 'AccountBillingHistoryComponent',
    entityType: 'account',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AccountNav',
    launchAtStartup: true,
    displayText: 'Account Navigation',
    paneType: 'nav',
    displayIcon: 'account_box',
    componentName: 'AccountNavComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AccountSearch',
    launchAtStartup: true,
    displayText: 'Account',
    paneType: 'search',
    displayIcon: 'account_box',
    componentName: 'AccountSearchComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Create Appointment',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentCreateComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'Appointment {appointmentId}',
    displayText: 'Appointment {appointmentId}',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentDetailComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AppointmentLocationMap {appointmentId}',
    displayText: 'Map {appointmentId}',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentLocationMapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AppointmentNav',
    launchAtStartup: true,
    displayText: 'Appointment Navigation',
    paneType: 'nav',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentNavComponent',
    componentModule: () => {
      console.log('appointment nav component module function called...');
      return import('@porrtal-components/a-quick-start-demo');
    },
  },
  {
    key: 'AppointmentSearch',
    launchAtStartup: true,
    displayText: 'Appointment',
    paneType: 'search',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentSearchComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AppointmentNav',
    launchAtStartup: true,
    displayText: 'Appointment Navigation',
    paneType: 'nav',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentNavComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'VizNav',
    launchAtStartup: true,
    displayText: 'Viz Demos',
    paneType: 'nav',
    displayIcon: 'map',
    componentName: 'VizNavComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Buildings',
    displayIcon: 'office',
    componentName: 'BuildingSceneWithQueryComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Earth',
    displayIcon: 'globe',
    componentName: 'DigitalElevationMapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Hurricane',
    displayIcon: 'git-commit',
    componentName: 'HurricaneMapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Earthquake',
    displayIcon: 'inner-join',
    componentName: 'EarthquakeMapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Collapse Tree Chart',
    displayIcon: 'diagram-tree',
    componentName: 'CollapsibleTreeComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Bar Chart',
    displayIcon: 'diagram-tree',
    componentName: 'HierarchicalBarChartComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Icicle Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableIcicleComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Sunburst Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableSunburstComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Treemap Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableTreemapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Circle Pack Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableCirclePackComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'YouTube Video',
    displayIcon: 'videocam',
    componentName: 'YoutubePlayerComponent',
    componentModule: () => import('@porrtal-components/a-learning'),
  },
];

@Component({
  selector: 'porrtal-quick-start-demo',
  standalone: true,
  imports: [CommonModule, ShellLayoutComponent],
  templateUrl: './quick-start-demo.component.html',
  styleUrls: ['./quick-start-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStartDemoComponent {
  constructor(public shellStateService: ShellStateService) {
    views.forEach((view) =>
      shellStateService.dispatch({
        type: 'registerView',
        view,
      })
    );

    shellStateService.dispatch({
      type: 'launchStartupViews',
    });
  }
}
