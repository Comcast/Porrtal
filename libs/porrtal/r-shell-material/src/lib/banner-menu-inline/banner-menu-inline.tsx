﻿/*
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
import { Button, Icon } from '@mui/material';
import { PorrtalMenuItem } from '@porrtal/r-api';
import {
  BannerMenuInlineProps,
  ShellAction,
  useShellDispatch,
} from '@porrtal/r-shell';
import { MenuItemData } from 'mui-nested-menu';
import { NestedDropdown } from '../nested-dropdown/NestedDropdown';
import styles from './banner-menu-inline.module.scss';
import { Dispatch } from 'react';

export function BannerMenuInline(props: BannerMenuInlineProps) {
  const dispatch = useShellDispatch();
  const inlineMenuItem = props.menuItems.find(
    (menuItem) => menuItem.displayText === 'inline'
  );
  if (
    !inlineMenuItem ||
    !inlineMenuItem.childMenu ||
    inlineMenuItem.childMenu.length < 1
  ) {
    return <></>;
  }

  return (
    <div className={styles['container']}>
      {inlineMenuItem.childMenu.map((menuItem) => {
        const hasChildren = menuItem.childMenu && menuItem.childMenu.length > 0;
        return (
          <>
            {hasChildren && (
              <NestedDropdown
                key={`${menuItem.displayText}:${menuItem.displayIcon}`}
                startIcon={<Icon>{menuItem.displayIcon}</Icon>}
                menuItemsData={{
                  label: menuItem.displayText,
                  items: getItems(menuItem.childMenu, dispatch),
                }}
              ></NestedDropdown>
            )}
            {!hasChildren && (
              <Button
                key={`${menuItem.displayText}:${menuItem.displayIcon}`}
                onClick={(evt) =>
                  menuItem.viewId &&
                  dispatch({
                    type: 'launchView',
                    viewId: menuItem.viewId,
                  })
                }
                startIcon={<Icon>{menuItem.displayIcon}</Icon>}
              >
                {menuItem.displayText}
              </Button>
            )}
          </>
        );
      })}
    </div>
  );
}

function getItems(
  menuItems: PorrtalMenuItem[] | undefined,
  dispatch: Dispatch<ShellAction>
): MenuItemData[] | undefined {
  const ret: MenuItemData[] = [];
  if (!menuItems || menuItems.length < 1) {
    return undefined;
  }
  menuItems?.forEach((menuItem) => {
    const newMenuItemData: MenuItemData = {};
    if (menuItem.displayText) {
      newMenuItemData.label = menuItem.displayText;
    }
    if (menuItem.displayIcon) {
      newMenuItemData.leftIcon = <Icon>{menuItem.displayIcon}</Icon>;
    }
    if (menuItem.childMenu && menuItem.childMenu.length > 0) {
      newMenuItemData.items = getItems(menuItem.childMenu, dispatch);
    }
    if (!menuItem.childMenu || menuItem.childMenu.length < 1) {
      newMenuItemData.callback = () =>
        menuItem.viewId &&
        dispatch({
          type: 'launchView',
          viewId: menuItem.viewId,
        });
    }
    ret.push(newMenuItemData);
  });
  return ret;
}

export default BannerMenuInline;
