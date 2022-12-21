import styles from './banner-menu-bar.module.scss';

/* eslint-disable-next-line */
export interface BannerMenuBarProps {}

export function BannerMenuBar(props: BannerMenuBarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BannerMenuBar!</h1>
    </div>
  );
}

export default BannerMenuBar;
