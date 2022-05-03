import { render } from '@testing-library/react';

import PorrtalUser from './porrtal-user';

describe('PorrtalUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalUser />);
    expect(baseElement).toBeTruthy();
  });
});
