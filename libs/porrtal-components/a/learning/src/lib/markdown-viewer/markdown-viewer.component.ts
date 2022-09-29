import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'porrtal-workspace-markdown-viewer',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownViewerComponent {
  @Input()
  set viewState(value: ViewState) {
    if (value && value.state) {
      this.content = value.state['content'] as string | undefined;
      this.contentUrl = value.state['contentUrl'] as string | undefined;
      this.contentIcon = value.state['contentIcon'] as string | undefined;
    } else {
      this.content = undefined;
      this.contentUrl = undefined;
      this.contentIcon = undefined;
    }
  };

  public content?: string;
  public contentUrl?: string;
  public contentIcon?: string;
}
