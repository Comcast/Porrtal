import { render } from '@testing-library/react';

import AppointmentSearch from './appointment-search';

describe('AppointmentSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppointmentSearch />);
    expect(baseElement).toBeTruthy();
  });
});
