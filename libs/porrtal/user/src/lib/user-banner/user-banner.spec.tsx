import { render } from '@testing-library/react';

import UserBanner from './user-banner';

describe('UserBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserBanner />);
    expect(baseElement).toBeTruthy();
  });
});
