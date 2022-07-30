import { render } from '@testing-library/react';

import AppointmentCreate from './appointment-create';

describe('AppointmentCreate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppointmentCreate />);
    expect(baseElement).toBeTruthy();
  });
});
