import { render } from '@testing-library/react';

import EarthquakeMap from './earthquake-map';

describe('EarthquakeMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EarthquakeMap />);
    expect(baseElement).toBeTruthy();
  });
});
