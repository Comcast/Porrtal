import { render } from '@testing-library/react';

import AccountDetail from './account-detail';

describe('AccountDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountDetail />);
    expect(baseElement).toBeTruthy();
  });
});
