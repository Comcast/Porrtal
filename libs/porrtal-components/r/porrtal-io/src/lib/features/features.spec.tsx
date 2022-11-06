import { render } from '@testing-library/react';

import Features from './features';

describe('Features', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Features />);
    expect(baseElement).toBeTruthy();
  });
});
