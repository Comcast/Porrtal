import { render } from '@testing-library/react';

import AxiosProxy from './axios-proxy';

describe('AxiosProxy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AxiosProxy />);
    expect(baseElement).toBeTruthy();
  });
});
