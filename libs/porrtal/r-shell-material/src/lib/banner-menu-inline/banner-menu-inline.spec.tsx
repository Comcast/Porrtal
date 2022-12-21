import { render } from '@testing-library/react';

import BannerMenuInline from './banner-menu-inline';

describe('BannerMenuInline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BannerMenuInline />);
    expect(baseElement).toBeTruthy();
  });
});
