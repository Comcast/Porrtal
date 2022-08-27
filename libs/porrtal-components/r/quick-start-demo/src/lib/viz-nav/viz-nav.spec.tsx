import { render } from '@testing-library/react';

import VizNav from './viz-nav';

describe('VizNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VizNav />);
    expect(baseElement).toBeTruthy();
  });
});
