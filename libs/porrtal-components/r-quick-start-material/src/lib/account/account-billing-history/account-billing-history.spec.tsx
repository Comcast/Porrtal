import { render } from '@testing-library/react';

import AccountBillingHistory from './account-billing-history';

describe('AccountBillingHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountBillingHistory />);
    expect(baseElement).toBeTruthy();
  });
});
