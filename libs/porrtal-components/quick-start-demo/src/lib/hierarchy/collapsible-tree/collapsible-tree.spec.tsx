import { render } from '@testing-library/react';

import CollapsibleTree from './collapsible-tree';

describe('CollapsibleTree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CollapsibleTree />);
    expect(baseElement).toBeTruthy();
  });
});
