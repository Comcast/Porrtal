import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownViewerComponent } from './markdown-viewer.component';

export default {
  title: 'MarkdownViewerComponent',
  component: MarkdownViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient })],
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

export const ContentUrl2 = Template.bind({});
ContentUrl2.args = {
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
      contentUrl: `https://raw.githubusercontent.com/angular/angular/main/README.md`,
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
