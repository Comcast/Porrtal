import { BannerMenuBarProps } from '@porrtal/r-shell';
import styles from './banner-menu-bar.module.scss';

export function BannerMenuBar(props: BannerMenuBarProps) {
  return (
    <div className={styles['container']}>
      {props.menuItems.filter(menuItem => menuItem.displayText !== 'inline').map(menuItem => <span>{menuItem.displayText}&nbsp;</span>)}
    </div>
  );
}

export default BannerMenuBar;
