import { render } from '@testing-library/react';

import MainView from './main-view';

describe('MainView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainView />);
    expect(baseElement).toBeTruthy();
  });
});
