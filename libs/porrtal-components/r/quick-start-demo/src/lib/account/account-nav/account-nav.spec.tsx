import { render } from '@testing-library/react';

import AccountNav from './account-nav';

describe('AccountNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountNav />);
    expect(baseElement).toBeTruthy();
  });
});
