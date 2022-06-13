import { render } from '@testing-library/react';

import PorrtalShellBlueprint from './porrtal-shell-blueprint';

describe('PorrtalShellBlueprint', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalShellBlueprint />);
    expect(baseElement).toBeTruthy();
  });
});
