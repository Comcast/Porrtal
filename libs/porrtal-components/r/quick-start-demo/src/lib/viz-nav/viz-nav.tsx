import { ViewComponentProps } from '@porrtal/r-api';
import { useShellDispatch } from '@porrtal/r-shell';
import styles from './viz-nav.module.scss';

export function VizNav(props: ViewComponentProps) {
  const shellDispatch = useShellDispatch();
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>ESRI Mapping Demos</h3>
      <div className={styles['data-container']}>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'HurricaneMap',
            })
          }
        >
          Hurricanes on the Globe
        </h4>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'EarthquakeMap',
            })
          }
        >
          Earthquake Map
        </h4>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'DigitalElevationMap',
            })
          }
        >
          Globe with Digital Elevation
        </h4>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'BuildingSceneWithQuery',
            })
          }
        >
          Building Scene
        </h4>
      </div>
      <h3 className={styles['title']}>D3JS Charting Demos</h3>
      <div className={styles['data-container']}>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'ZoomableSunburst',
            })
          }
        >
          Zoomable Sunburst Chart
        </h4>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'ZoomableCirclePack',
            })
          }
        >
          Zoomable Circle Pack Chart
        </h4>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'ZoomableIcicle',
            })
          }
        >
          Zoomable Icicle Chart
        </h4>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'ZoomableTreemap',
            })
          }
        >
          Zoomable Treemap Chart
        </h4>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'CollapsibleTree',
            })
          }
        >
          Collapsable Tree Chart
        </h4>
        <h4
          className={styles['link-button']}
          onClick={() =>
            shellDispatch({
              type: 'launchView',
              viewId: 'HierarchicalBarChart',
            })
          }
        >
          Hierarchical Bar Chart
        </h4>
      </div>
    </div>
  );
}

export default VizNav;
