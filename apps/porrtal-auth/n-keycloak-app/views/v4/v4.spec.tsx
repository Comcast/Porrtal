import { render } from '@testing-library/react';

import V4 from './v4';

describe('V4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<V4 />);
    expect(baseElement).toBeTruthy();
  });
});
