import { BannerProps } from '@porrtal/r-shell';
import styles from './banner.module.scss';

export function Banner(props: BannerProps) {
  return (
    <div className={styles['container']}>
      Banner
    </div>
  );
}

export default Banner;
