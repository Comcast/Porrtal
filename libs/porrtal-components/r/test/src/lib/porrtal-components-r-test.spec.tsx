import { render } from '@testing-library/react';

import PorrtalComponentsRTest from './porrtal-components-r-test';

describe('PorrtalComponentsRTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalComponentsRTest />);
    expect(baseElement).toBeTruthy();
  });
});
