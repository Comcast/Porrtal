import { render } from '@testing-library/react';

import AppointmentDetail from './appointment-detail';

describe('AppointmentDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppointmentDetail />);
    expect(baseElement).toBeTruthy();
  });
});
