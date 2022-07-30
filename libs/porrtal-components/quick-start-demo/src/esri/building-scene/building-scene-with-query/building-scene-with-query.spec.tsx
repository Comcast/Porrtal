import { render } from '@testing-library/react';

import BuildingSceneWithQuery from './building-scene-with-query';

describe('BuildingSceneWithQuery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuildingSceneWithQuery />);
    expect(baseElement).toBeTruthy();
  });
});
