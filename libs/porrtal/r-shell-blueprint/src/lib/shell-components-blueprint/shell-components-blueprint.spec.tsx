import { render } from '@testing-library/react';

import ShellComponentsBlueprint from './shell-components-blueprint';

describe('ShellComponentsBlueprint', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShellComponentsBlueprint />);
    expect(baseElement).toBeTruthy();
  });
});
