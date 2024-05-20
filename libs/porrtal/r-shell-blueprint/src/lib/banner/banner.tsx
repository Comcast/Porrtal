/*
Copyright 2024 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { Icon, IconName, Menu, MenuItem } from '@blueprintjs/core';
import { Popover2, Classes } from '@blueprintjs/popover2';
import { BannerProps } from '@porrtal/r-shell';
import { ReactNode } from 'react';
import styles from './banner.module.scss';

export function Banner(props: BannerProps) {
  return (
    <div className={styles['container']}>
      {props.bannerData?.displayIcon && (
        <Icon
          className={styles['banner-icon-icon']}
          icon={props.bannerData.displayIcon as IconName}
          size={20}
        />
      )}
      {!props.bannerData?.displayIcon && <span></span>}
      {props.bannerData?.displayImage && (
        <img
          className={styles['banner-image-icon']}
          src={props.bannerData.displayImage}
          alt="angular icon"
        ></img>
      )}
      {!props.bannerData?.displayImage && <span></span>}
      <BannerMenu {...props}>
        <h3 className={styles['banner-title']}>
          {props.bannerData?.bannerImageUrl &&
            props.bannerData?.bannerImageWidth &&
            props.bannerData?.bannerImageHeight && (
              <img
                src={props.bannerData.bannerImageUrl}
                width={props.bannerData.bannerImageWidth}
                height={props.bannerData.bannerImageHeight}
              ></img>
            )}
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
    return <div>{props.children}</div>;
  }

  return (
    <Popover2
      content={
        <Menu className={Classes.POPOVER2_DISMISS}>
          {props.bannerData.childData.map((menuItem) => (
            <MenuItem
              key={menuItem.key}
              text={
                <>
                  {props.bannerData?.displayIcon && (
                    <Icon
                      className={styles['banner-icon']}
                      icon={menuItem.displayIcon as IconName}
                      size={20}
                    />
                  )}
                  {menuItem.displayImage && (
                    <img
                      className={styles['image-icon']}
                      src={menuItem.displayImage}
                      alt="angular icon"
                    ></img>
                  )}
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
