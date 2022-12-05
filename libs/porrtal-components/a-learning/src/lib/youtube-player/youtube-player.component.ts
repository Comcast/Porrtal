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
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ViewState } from '@porrtal/a-api';

let apiLoaded = false;

@Component({
  selector: 'porrtal-youtube-player',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubePlayerComponent implements OnInit {
  @Input()
  set viewState(value: ViewState) {
    if (value && value.state) {
      this.videoId = value.state['videoId'] as string | undefined;
    } else {
      this.videoId = undefined;
    }
  }

  public videoId?: string;
  public width = '100%';
  public height = '100%';

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}
