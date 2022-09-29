import { ViewComponentProps } from '@porrtal/r-api';
import YouTube from 'react-youtube';
import useDimensions from 'react-cool-dimensions';
import styles from './youtube-player.module.scss';

export function YoutubePlayer(props: ViewComponentProps) {
  const { observe, width, height } = useDimensions<HTMLDivElement>({});
  return (
    <div className={styles['container']} ref={observe}>
      {width},{height}
      <YouTube
        opts={{width, height}}
        videoId={props.viewState?.state?.['videoId'] as string}
      ></YouTube>
    </div>
  );
}

export default YoutubePlayer;
