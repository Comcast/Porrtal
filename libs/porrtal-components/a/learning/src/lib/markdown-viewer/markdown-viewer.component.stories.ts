import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownViewerComponent } from './markdown-viewer.component';

export default {
  title: 'MarkdownViewerComponent',
  component: MarkdownViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [MarkdownModule.forRoot()],
    })
  ],
} as Meta<MarkdownViewerComponent>;

const Template: Story<MarkdownViewerComponent> = (args: MarkdownViewerComponent) => ({
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
}

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
      contentUrl: `https://github.com/datumgeek/porrtal-workspace/blob/main/README.md`,
    },
  },
}
