import { render } from '@testing-library/react';

import PorrtalComponentsRQuickStartMaterial from './porrtal-components-r-quick-start-material';

describe('PorrtalComponentsRQuickStartMaterial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PorrtalComponentsRQuickStartMaterial />);
    expect(baseElement).toBeTruthy();
  });
});
