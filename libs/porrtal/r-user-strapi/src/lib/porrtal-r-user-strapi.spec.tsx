import { render } from '@testing-library/react';

import PorrtalRUserStrapi from './porrtal-r-user-strapi';

describe('PorrtalRUserStrapi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalRUserStrapi />);
    expect(baseElement).toBeTruthy();
  });
});
