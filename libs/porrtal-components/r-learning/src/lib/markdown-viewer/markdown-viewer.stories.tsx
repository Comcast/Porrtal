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
import { MarkdownViewer } from './markdown-viewer';

export default {
  component: MarkdownViewer,
  title: 'MarkdownViewer',
} as ComponentMeta<typeof MarkdownViewer>;

const Template: ComponentStory<typeof MarkdownViewer> = (args) => (
  <MarkdownViewer {...args} />
);

export const Content = Template.bind({});
Content.args = {
  viewState: {
    key: '',
    displayText: '',
    displayIcon: '',
    paneType: 'main',
    componentImport: () => undefined,
    view: {
      componentName: 'MarkdownViewer',
      componentModule: '',
      displayText: '',
    },
    state: {
      content: `# welcome to markdown viewer
this is super cool
* one
* two
* three`,
    },
  },
};

export const ContentUrl = Template.bind({});
ContentUrl.args = {
  viewState: {
    key: '',
    displayText: '',
    displayIcon: '',
    paneType: 'main',
    componentImport: () => undefined,
    view: {
      componentName: 'MarkdownViewer',
      componentModule: '',
      displayText: '',
    },
    state: {
      contentUrl: `https://raw.githubusercontent.com/datumgeek/jersey-rest-test03/master/README.md`,
    },
  },
};

export const ContentHtml = Template.bind({});
ContentHtml.args = {
  viewState: {
    key: '',
    displayText: '',
    displayIcon: '',
    paneType: 'main',
    componentImport: () => undefined,
    view: {
      componentName: 'MarkdownViewer',
      componentModule: '',
      displayText: '',
    },
    state: {
      contentUrl: `https://raw.githubusercontent.com/datumgeek/ngx-popperjs/master/projects/ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popperjs-content.component.html`,
    },
  },
};

export const ContentScss = Template.bind({});
ContentScss.args = {
  viewState: {
    key: '',
    displayText: '',
    displayIcon: '',
    paneType: 'main',
    componentImport: () => undefined,
    view: {
      componentName: 'MarkdownViewer',
      componentModule: '',
      displayText: '',
    },
    state: {
      contentUrl: `https://raw.githubusercontent.com/datumgeek/ngx-popperjs/master/projects/ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popperjs-content.component.scss`,
    },
  },
};

export const ContentTs = Template.bind({});
ContentTs.args = {
  viewState: {
    key: '',
    displayText: '',
    displayIcon: '',
    paneType: 'main',
    componentImport: () => undefined,
    view: {
      componentName: 'MarkdownViewer',
      componentModule: '',
      displayText: '',
    },
    state: {
      contentUrl: `https://raw.githubusercontent.com/datumgeek/ngx-popperjs/master/projects/ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popper-content.component.ts`,
    },
  },
};
