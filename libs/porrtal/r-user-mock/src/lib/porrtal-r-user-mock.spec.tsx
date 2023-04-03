import { render } from '@testing-library/react';

import PorrtalRUserMock from './porrtal-r-user-mock';

describe('PorrtalRUserMock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalRUserMock />);
    expect(baseElement).toBeTruthy();
  });
});
