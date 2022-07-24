import { render } from '@testing-library/react';

import EntityMenu from './entity-menu';

describe('EntityMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EntityMenu />);
    expect(baseElement).toBeTruthy();
  });
});
