import { render } from '@testing-library/react';

import NavView from './nav-view';

describe('NavView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavView />);
    expect(baseElement).toBeTruthy();
  });
});
