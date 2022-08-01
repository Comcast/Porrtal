import { render } from '@testing-library/react';

import AccountCreate from './account-create';

describe('AccountCreate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountCreate />);
    expect(baseElement).toBeTruthy();
  });
});
