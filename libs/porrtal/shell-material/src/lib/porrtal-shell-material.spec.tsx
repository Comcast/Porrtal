import { render } from '@testing-library/react';

import PorrtalShellMaterial from './porrtal-shell-material';

describe('PorrtalShellMaterial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalShellMaterial />);
    expect(baseElement).toBeTruthy();
  });
});
