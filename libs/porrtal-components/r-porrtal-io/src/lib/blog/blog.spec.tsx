import { render } from '@testing-library/react';

import Blog from './blog';

describe('Blog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Blog />);
    expect(baseElement).toBeTruthy();
  });
});
