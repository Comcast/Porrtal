import { render } from '@testing-library/react';

import SearchState from './search-state';

describe('SearchState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchState />);
    expect(baseElement).toBeTruthy();
  });
});
