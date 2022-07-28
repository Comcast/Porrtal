import { render } from '@testing-library/react';

import LoggerState from './logger-state';

describe('LoggerState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoggerState />);
    expect(baseElement).toBeTruthy();
  });
});
