import { render } from '@testing-library/react';

import ShellLayout from './shell-layout';

describe('ShellLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShellLayout />);
    expect(baseElement).toBeTruthy();
  });
});
