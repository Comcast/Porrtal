import { BannerMenuInlineProps } from '@porrtal/r-shell';
import styles from './banner-menu-inline.module.scss';

export function BannerMenuInline(props: BannerMenuInlineProps) {
  const inlineMenu = props.menuItems.find(menuItem => menuItem.displayText === 'inline');
  return (
    <div className={styles['container']}>
      {inlineMenu?.childMenu?.map(menuItem => <span>{menuItem.displayText}&nbsp;</span>)}
    </div>
  );
}

export default BannerMenuInline;
