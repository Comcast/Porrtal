import { render } from '@testing-library/react';

import LoggerMessages from './logger-messages';

describe('LoggerMessages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoggerMessages />);
    expect(baseElement).toBeTruthy();
  });
});
