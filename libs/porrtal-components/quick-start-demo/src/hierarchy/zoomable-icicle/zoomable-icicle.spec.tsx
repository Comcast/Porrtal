import { render } from '@testing-library/react';

import ZoomableIcicle from './zoomable-icicle';

describe('ZoomableIcicle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ZoomableIcicle />);
    expect(baseElement).toBeTruthy();
  });
});
