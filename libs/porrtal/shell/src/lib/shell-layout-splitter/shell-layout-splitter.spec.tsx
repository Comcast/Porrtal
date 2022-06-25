import { render } from '@testing-library/react';

import ShellLayoutSplitter from './shell-layout-splitter';

describe('ShellLayoutSplitter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShellLayoutSplitter />);
    expect(baseElement).toBeTruthy();
  });
});
