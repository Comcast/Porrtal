import { ComponentStory, ComponentMeta } from '@storybook/react';
import { YoutubePlayer } from './youtube-player';

export default {
  component: YoutubePlayer,
  title: 'YoutubePlayer',
} as ComponentMeta<typeof YoutubePlayer>;

const Template: ComponentStory<typeof YoutubePlayer> = (args) => (
  <YoutubePlayer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  viewState: {
    key: '',
    displayText: '',
    displayIcon: '',
    paneType: 'main',
    componentImport: () => new Promise(() => {
      // do nothing
    }),
    view: {
      componentName: 'YoutubePlayer',
      componentModule: '',
      displayText: '',
    },
    state: {
      videoId: 'Z76QlSpYcck',
    },
  },
};
