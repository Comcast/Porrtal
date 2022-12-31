import { render } from '@testing-library/react';

import V2 from './v2';

describe('V2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<V2 />);
    expect(baseElement).toBeTruthy();
  });
});
