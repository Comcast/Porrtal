import { render } from '@testing-library/react';

import ZoomableCirclePack from './zoomable-circle-pack';

describe('ZoomableCirclePack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ZoomableCirclePack />);
    expect(baseElement).toBeTruthy();
  });
});
