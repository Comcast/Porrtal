import { render } from '@testing-library/react';

import PorrtalRUserKeycloak from './porrtal-r-user-keycloak';

describe('PorrtalRUserKeycloak', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalRUserKeycloak />);
    expect(baseElement).toBeTruthy();
  });
});
