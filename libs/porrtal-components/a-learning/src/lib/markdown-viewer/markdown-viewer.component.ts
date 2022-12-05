/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SecurityContext,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';
import {
  MarkdownModule,
  MarkdownService,
  MarkedOptions,
  SECURITY_CONTEXT,
} from '../ngx-markdown/index';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'porrtal-markdown-viewer',
  standalone: true,
  imports: [CommonModule, MarkdownModule, HttpClientModule],
  providers: [
    MarkdownService,
    { provide: SECURITY_CONTEXT, useValue: SecurityContext.HTML },

    HttpClient,
    {
      provide: MarkedOptions,
      useValue: {
        baseUrl: 'https://raw.githubusercontent.com/angular/angular/main',
      },
    },
  ],

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
  }

  public content?: string;
  public contentUrl?: string;
  public contentIcon?: string;

  constructor(
    private markdownService: MarkdownService,
    private markedOptions: MarkedOptions
  ) {
    console.log('markedOptions', markedOptions);
    markdownService.options = markedOptions;
  }
}
