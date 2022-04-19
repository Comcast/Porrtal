import { render } from '@testing-library/react';

import PorrtalShell from './porrtal-shell';

describe('PorrtalShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalShell />);
    expect(baseElement).toBeTruthy();
  });
});
