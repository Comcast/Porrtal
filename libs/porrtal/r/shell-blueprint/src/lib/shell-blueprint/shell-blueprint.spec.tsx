import { render } from '@testing-library/react';

import ShellBlueprint from './shell-blueprint';

describe('ShellBlueprint', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShellBlueprint />);
    expect(baseElement).toBeTruthy();
  });
});
