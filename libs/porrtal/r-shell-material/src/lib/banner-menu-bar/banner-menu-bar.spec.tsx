import { render } from '@testing-library/react';

import BannerMenuBar from './banner-menu-bar';

describe('BannerMenuBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BannerMenuBar />);
    expect(baseElement).toBeTruthy();
  });
});
