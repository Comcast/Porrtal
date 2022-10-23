import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
  };

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
