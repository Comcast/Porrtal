import { render } from '@testing-library/react';

import Docs from './docs';

describe('Docs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Docs />);
    expect(baseElement).toBeTruthy();
  });
});
