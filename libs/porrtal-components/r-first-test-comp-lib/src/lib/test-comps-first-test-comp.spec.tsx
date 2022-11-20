import { render } from '@testing-library/react';

import TestCompsFirstTestComp from './test-comps-first-test-comp';

describe('TestCompsFirstTestComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestCompsFirstTestComp />);
    expect(baseElement).toBeTruthy();
  });
});
