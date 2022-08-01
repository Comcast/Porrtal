import styles from './hierarchical-bar-chart.module.scss';

/* eslint-disable-next-line */
export interface HierarchicalBarChartProps {}

export function HierarchicalBarChart(props: HierarchicalBarChartProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HierarchicalBarChart!</h1>
    </div>
  );
}

export default HierarchicalBarChart;
