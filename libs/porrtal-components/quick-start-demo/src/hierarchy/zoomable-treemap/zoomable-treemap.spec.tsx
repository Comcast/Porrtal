import { render } from '@testing-library/react';

import ZoomableTreemap from './zoomable-treemap';

describe('ZoomableTreemap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ZoomableTreemap />);
    expect(baseElement).toBeTruthy();
  });
});
