import { render } from '@testing-library/react';

import AppointmentLocationMap from './appointment-location-map';

describe('AppointmentLocationMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppointmentLocationMap />);
    expect(baseElement).toBeTruthy();
  });
});
