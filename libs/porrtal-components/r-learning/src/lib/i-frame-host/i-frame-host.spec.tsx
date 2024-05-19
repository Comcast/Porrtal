import { render } from '@testing-library/react';

import IFrameHost from './i-frame-host';

describe('IFrameHost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IFrameHost />);
    expect(baseElement).toBeTruthy();
  });
});
