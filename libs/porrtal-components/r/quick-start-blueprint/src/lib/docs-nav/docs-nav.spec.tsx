import { render } from '@testing-library/react';

import DocsNav from './docs-nav';

describe('DocsNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocsNav />);
    expect(baseElement).toBeTruthy();
  });
});
