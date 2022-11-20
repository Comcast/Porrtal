import { render } from '@testing-library/react';

import ViewStack from './view-stack';

describe('ViewStack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ViewStack />);
    expect(baseElement).toBeTruthy();
  });
});
