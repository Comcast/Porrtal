import { render } from '@testing-library/react';

import SearchViewStack from './search-view-stack';

describe('SearchViewStack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchViewStack />);
    expect(baseElement).toBeTruthy();
  });
});
