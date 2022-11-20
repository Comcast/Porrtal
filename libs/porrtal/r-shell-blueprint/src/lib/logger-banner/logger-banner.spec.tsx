import { render } from '@testing-library/react';

import LoggerBanner from './logger-banner';

describe('LoggerBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoggerBanner />);
    expect(baseElement).toBeTruthy();
  });
});
