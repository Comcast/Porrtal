import { Icon, IconName, Menu, MenuItem } from '@blueprintjs/core';
import { Popover2, Classes } from '@blueprintjs/popover2';
import { BannerProps } from '@porrtal/r-shell';
import { ReactNode } from 'react';
import styles from './banner.module.scss';

export function Banner(props: BannerProps) {
  return (
    <div className={styles['container']}>
      &nbsp;
      {props.bannerData?.displayIcon && (
        <Icon icon={props.bannerData.displayIcon as IconName} />
      )}
      &nbsp;
      <BannerMenu {...props}>
        <h3 className={styles['banner-title']}>
          {props.bannerData?.displayText}
          {props.bannerData?.childData &&
            props.bannerData.childData.length > 0 && <Icon icon="caret-down" />}
        </h3>
      </BannerMenu>
      <span></span>
    </div>
  );
}

function BannerMenu(props: BannerProps & { children: ReactNode | undefined }) {
  if (!props.children || !props.bannerData) {
    return null;
  }

  if (!props.bannerData.childData || props.bannerData.childData.length < 1) {
    return <>props.children</>;
  }

  return (
    <Popover2
      content={
        <Menu className={Classes.POPOVER2_DISMISS}>
          {props.bannerData.childData.map((menuItem) => (
            <MenuItem
              key={menuItem.displayText}
              icon={menuItem.displayIcon as IconName}
              text={
                <>
                  <span>{menuItem.displayText}</span>
                  <Icon
                    className={styles['popout-icon']}
                    icon="document-open"
                    onClick={(evt) => {
                      window.open(menuItem.targetUrl);
                      evt.stopPropagation();
                    }}
                  ></Icon>
                </>
              }
              onClick={(evt) => {
                if (menuItem.targetUrl) {
                  window.location.href = menuItem.targetUrl;
                }
              }}
            />
          ))}
        </Menu>
      }
    >
      {props.children}
    </Popover2>
  );
}

export default Banner;
