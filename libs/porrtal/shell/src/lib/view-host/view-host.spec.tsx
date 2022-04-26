import { render } from '@testing-library/react';

import ViewHost from './view-host';

describe('ViewHost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ViewHost />);
    expect(baseElement).toBeTruthy();
  });
});
