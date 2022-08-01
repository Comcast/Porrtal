import { render } from '@testing-library/react';

import AppointmentNav from './appointment-nav';

describe('AppointmentNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppointmentNav />);
    expect(baseElement).toBeTruthy();
  });
});
