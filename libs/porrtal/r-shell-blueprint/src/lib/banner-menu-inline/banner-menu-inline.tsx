import styles from './banner-menu-inline.module.scss';

/* eslint-disable-next-line */
export interface BannerMenuInlineProps {}

export function BannerMenuInline(props: BannerMenuInlineProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BannerMenuInline!</h1>
    </div>
  );
}

export default BannerMenuInline;
