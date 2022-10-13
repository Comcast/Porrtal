import { Icon } from '@mui/material';
import { BannerProps } from '@porrtal/r-shell';
import styles from './banner.module.scss';

export function Banner(props: BannerProps) {
  return (
    <div className={styles['container']}>
      &nbsp;
      {props.bannerData?.displayIcon && (
        <Icon>{props.bannerData.displayIcon}</Icon>
      )}
      {props.bannerData?.displayText}
    </div>
  );
}

export default Banner;
