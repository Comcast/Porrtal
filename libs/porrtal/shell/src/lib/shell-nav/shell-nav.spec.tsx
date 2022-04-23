import { render } from '@testing-library/react';

import ShellNav from './shell-nav';

describe('ShellNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShellNav />);
    expect(baseElement).toBeTruthy();
  });
});
