import { render } from '@testing-library/react';

import PorrtalRUserAuth0 from './porrtal-r-user-auth0';

describe('PorrtalRUserAuth0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalRUserAuth0 />);
    expect(baseElement).toBeTruthy();
  });
});
