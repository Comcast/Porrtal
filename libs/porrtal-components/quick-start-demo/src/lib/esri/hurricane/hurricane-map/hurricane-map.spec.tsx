import { render } from '@testing-library/react';

import HurricaneMap from './hurricane-map';

describe('HurricaneMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HurricaneMap />);
    expect(baseElement).toBeTruthy();
  });
});
