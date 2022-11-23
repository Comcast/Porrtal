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
