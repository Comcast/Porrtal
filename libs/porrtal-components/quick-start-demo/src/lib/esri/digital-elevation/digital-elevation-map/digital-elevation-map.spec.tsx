import { render } from '@testing-library/react';

import DigitalElevationMap from './digital-elevation-map';

describe('DigitalElevationMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DigitalElevationMap />);
    expect(baseElement).toBeTruthy();
  });
});
