import { render } from '@testing-library/react';

import V1 from './v1';

describe('V1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<V1 />);
    expect(baseElement).toBeTruthy();
  });
});
