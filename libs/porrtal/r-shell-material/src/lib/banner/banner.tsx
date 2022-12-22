/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
import { Icon, Typography, Menu } from '@mui/material';
import { IconMenuItem } from 'mui-nested-menu';
import { BannerProps } from '@porrtal/r-shell';
import { ReactNode, useState, MouseEvent } from 'react';
import styles from './banner.module.scss';

export function Banner(props: BannerProps) {
  return (
    <div className={styles['container']}>
      &nbsp;
      {props.bannerData?.displayIcon && (
        <Icon className={styles['banner-icon']}>
          {props.bannerData.displayIcon}
        </Icon>
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
      &nbsp;
      <BannerMenu {...props}>
        <Typography variant="h5" gutterBottom={false} className={styles['banner-title']}>
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
            props.bannerData.childData.length > 0 && (
              <Icon className={styles['down-icon']}>arrow_drop_down</Icon>
            )}
        </Typography>
      </BannerMenu>
      <span></span>
    </div>
  );
}

function BannerMenu(props: BannerProps & { children: ReactNode | undefined }) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (!props.children || !props.bannerData) {
    return null;
  }

  if (!props.bannerData.childData || props.bannerData.childData.length < 1) {
    return <div>{props.children}</div>;
  }

  return (
    <>
      <span
        id="banner-menu-trigger"
        aria-controls={open ? 'banner-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.children}
      </span>
      <Menu
        id="banner-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.bannerData.childData.map((menuItem) => (
          <IconMenuItem
            key={menuItem.key ?? menuItem.displayText}
            leftIcon={
              <>
                {menuItem.displayIcon && <Icon>{menuItem.displayIcon}</Icon>}
                {menuItem.displayImage && (
                  <img
                    className={styles['image-icon']}
                    src={menuItem.displayImage}
                    alt="angular icon"
                  ></img>
                )}
              </>
            }
            label={menuItem.displayText}
            rightIcon={
              <Icon
                className={styles['popout-icon']}
                onClick={(evt) => {
                  window.open(menuItem.targetUrl);
                  evt.stopPropagation();
                }}
              >
                open_in_new
              </Icon>
            }
            onClick={() => {
              if (menuItem.targetUrl) {
                window.location.href = menuItem.targetUrl;
              }
              setAnchorEl(null);
            }}
          />
        ))}
      </Menu>
    </>
  );
}

export default Banner;
