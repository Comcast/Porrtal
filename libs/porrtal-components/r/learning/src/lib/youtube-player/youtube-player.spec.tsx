import { render } from '@testing-library/react';

import YoutubePlayer from './youtube-player';

describe('YoutubePlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YoutubePlayer />);
    expect(baseElement).toBeTruthy();
  });
});
