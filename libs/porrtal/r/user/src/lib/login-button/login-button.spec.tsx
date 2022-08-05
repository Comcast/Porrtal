import { render } from '@testing-library/react';

import LoginButton from './login-button';

describe('LoginButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginButton />);
    expect(baseElement).toBeTruthy();
  });
});
