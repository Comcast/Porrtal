import { render } from '@testing-library/react';

import HierarchicalBarChart from './hierarchical-bar-chart';

describe('HierarchicalBarChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HierarchicalBarChart />);
    expect(baseElement).toBeTruthy();
  });
});
