import { render } from '@testing-library/react';

import TestCompsSecondTestComp from './test-comps-second-test-comp';

describe('TestCompsSecondTestComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestCompsSecondTestComp />);
    expect(baseElement).toBeTruthy();
  });
});
