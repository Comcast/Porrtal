import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { YoutubePlayerComponent } from './youtube-player.component';

export default {
  title: 'YoutubePlayerComponent',
  component: YoutubePlayerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<YoutubePlayerComponent>;

const Template: Story<YoutubePlayerComponent> = (
  args: YoutubePlayerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  viewState: {
    key: '',
    displayText: '',
    displayIcon: '',
    paneType: 'main',
    componentImport: () => undefined,
    view: {
      componentName: 'YoutubePlayerComponent',
      componentModule: '',
      displayText: '',
    },
    state: {
      videoId: 'Z76QlSpYcck',
    },
  },
};
