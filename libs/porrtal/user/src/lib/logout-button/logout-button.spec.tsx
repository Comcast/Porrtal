import { render } from '@testing-library/react';

import LogoutButton from './logout-button';

describe('LogoutButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogoutButton />);
    expect(baseElement).toBeTruthy();
  });
});
