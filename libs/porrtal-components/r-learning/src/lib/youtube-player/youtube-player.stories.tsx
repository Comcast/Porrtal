/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
    componentImport: () =>
      new Promise(() => {
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
