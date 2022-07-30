import { render } from '@testing-library/react';

import QuickStartDemo from './index';

describe('QuickStartDemo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuickStartDemo />);
    expect(baseElement).toBeTruthy();
  });
});
