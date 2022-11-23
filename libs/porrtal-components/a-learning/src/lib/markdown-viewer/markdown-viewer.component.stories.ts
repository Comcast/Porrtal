import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MarkdownViewerComponent } from './markdown-viewer.component';

export default {
  title: 'MarkdownViewerComponent',
  component: MarkdownViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule],
    }),
  ],
} as Meta<MarkdownViewerComponent>;

const Template: Story<MarkdownViewerComponent> = (
  args: MarkdownViewerComponent
) => ({
  props: args,
});

export const Content = Template.bind({});
Content.args = {
  viewState: {
    key: '',
    displayText: '',
    displayIcon: '',
    paneType: 'main',
    componentImport: () => undefined,
    view: {
      componentName: 'MarkdownViewerComponent',
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
      componentName: 'MarkdownViewerComponent',
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
      componentName: 'MarkdownViewerComponent',
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
      componentName: 'MarkdownViewerComponent',
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
      componentName: 'MarkdownViewerComponent',
      componentModule: '',
      displayText: '',
    },
    state: {
      contentUrl: `https://raw.githubusercontent.com/datumgeek/ngx-popperjs/master/projects/ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popper-content.component.ts`,
    },
  },
};
