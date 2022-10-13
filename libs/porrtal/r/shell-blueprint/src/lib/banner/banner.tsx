import { Icon, IconName } from '@blueprintjs/core';
import { BannerProps } from '@porrtal/r-shell';
import styles from './banner.module.scss';

export function Banner(props: BannerProps) {
  return (
    <div className={styles['container']}>
      {props.bannerData?.displayIcon && (
        <Icon icon={props.bannerData.displayIcon as IconName} />
      )}
      &nbsp;
      {props.bannerData?.displayText}
    </div>
  );
}

export default Banner;
