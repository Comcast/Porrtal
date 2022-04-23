import { render } from '@testing-library/react';

import ShellMain from './shell-main';

describe('ShellMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShellMain />);
    expect(baseElement).toBeTruthy();
  });
});
