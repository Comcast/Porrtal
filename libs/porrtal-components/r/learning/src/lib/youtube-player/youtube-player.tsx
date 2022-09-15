import styles from './youtube-player.module.scss';

/* eslint-disable-next-line */
export interface YoutubePlayerProps {}

export function YoutubePlayer(props: YoutubePlayerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to YoutubePlayer!</h1>
    </div>
  );
}

export default YoutubePlayer;
