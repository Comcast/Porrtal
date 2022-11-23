import { render } from '@testing-library/react';

import ZoomableSunburst from './zoomable-sunburst';

describe('ZoomableSunburst', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ZoomableSunburst />);
    expect(baseElement).toBeTruthy();
  });
});
