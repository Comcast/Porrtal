import { render } from '@testing-library/react';

import PorrtalRUserMsal from './porrtal-r-user-msal';

describe('PorrtalRUserMsal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalRUserMsal />);
    expect(baseElement).toBeTruthy();
  });
});
