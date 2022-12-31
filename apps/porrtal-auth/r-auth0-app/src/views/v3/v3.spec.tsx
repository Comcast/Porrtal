import { render } from '@testing-library/react';

import V3 from './v3';

describe('V3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<V3 />);
    expect(baseElement).toBeTruthy();
  });
});
