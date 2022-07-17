import { render } from '@testing-library/react';

import { SearchViewStack } from '@porrtal/shell';

describe('SearchViewStack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SearchViewStack width="700px" height="450px" />
    );
    expect(baseElement).toBeTruthy();
  });
});
