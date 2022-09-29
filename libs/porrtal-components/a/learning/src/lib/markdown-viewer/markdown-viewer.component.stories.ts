import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MarkdownViewerComponent } from './markdown-viewer.component';

export default {
  title: 'MarkdownViewerComponent',
  component: MarkdownViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MarkdownViewerComponent>;

const Template: Story<MarkdownViewerComponent> = (args: MarkdownViewerComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}