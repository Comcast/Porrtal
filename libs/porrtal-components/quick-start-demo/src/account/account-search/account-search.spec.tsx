import { render } from '@testing-library/react';

import AccountSearch from './account-search';

describe('AccountSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountSearch />);
    expect(baseElement).toBeTruthy();
  });
});
