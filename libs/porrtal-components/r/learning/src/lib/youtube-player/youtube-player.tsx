import { ViewComponentProps } from '@porrtal/r-api';
import YouTube from 'react-youtube';
import styles from './youtube-player.module.scss';

export function YoutubePlayer(props: ViewComponentProps) {
  return (
    <YouTube videoId={(props.viewState?.state?.['videoId'] as string)}></YouTube>
  );
}

export default YoutubePlayer;
