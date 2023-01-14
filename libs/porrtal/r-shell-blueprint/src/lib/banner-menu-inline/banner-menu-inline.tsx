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
import { Button, ButtonGroup, IconName, Menu } from '@blueprintjs/core';
import { MenuItem2, Popover2 } from '@blueprintjs/popover2';
import { BannerMenuInlineProps, useShellDispatch } from '@porrtal/r-shell';
import styles from './banner-menu-inline.module.scss';

export function BannerMenuInline(props: BannerMenuInlineProps) {
  const inlineMenu = props.menuItems.find(menuItem => menuItem.displayText === 'inline');
  const dispatch = useShellDispatch();
  if (!inlineMenu || !inlineMenu.childMenu || inlineMenu.childMenu.length < 1) {
    return <></>;
  }
  return (
    <ButtonGroup minimal className={styles['container']}>
      {inlineMenu.childMenu
        .filter((menuItem) => menuItem.displayText !== 'inline')
        .map((menuItem) => {
          const hasChildren =
            menuItem.childMenu && menuItem.childMenu.length > 0;
          return (
            <>
              {hasChildren && (
                <Popover2
                  key={`${menuItem.displayText}:${menuItem.displayIcon}`}
                  interactionKind="click"
                  placement="bottom"
                  content={
                    <Menu>
                      {menuItem.childMenu && menuItem.childMenu.length > 0 && (
                        <BannerMenuInlineItem
                          menuItems={menuItem.childMenu}
                        ></BannerMenuInlineItem>
                      )}
                    </Menu>
                  }
                >
                  <Button icon={menuItem.displayIcon as IconName} minimal>
                    {menuItem.displayText}
                  </Button>
                </Popover2>
              )}
              {!hasChildren && (
                <Button
                  minimal
                  key={`${menuItem.displayText}:${menuItem.displayIcon}`}
                  icon={menuItem.displayIcon as IconName}
                  onClick={(evt) =>
                    menuItem.viewId &&
                    dispatch({
                      type: 'launchView',
                      viewId: menuItem.viewId,
                    })
                  }
                >
                  {menuItem.displayText}
                </Button>
              )}
            </>
          );
        })}
    </ButtonGroup>
  );
}

export function BannerMenuInlineItem(props: BannerMenuInlineProps) {
  const dispatch = useShellDispatch();
  return (
    <>
      {props.menuItems.map((menuItem) => {
        const hasChildren = menuItem.childMenu && menuItem.childMenu.length > 0;
        return (
          <>
            {hasChildren && (
              <MenuItem2
                key={`${menuItem.displayText}:${menuItem.displayIcon}`}
                icon={menuItem.displayIcon as IconName}
                text={menuItem.displayText}
              >
                {menuItem.childMenu && menuItem.childMenu.length > 0 && (
                  <BannerMenuInlineItem
                    menuItems={menuItem.childMenu}
                  ></BannerMenuInlineItem>
                )}
              </MenuItem2>
            )}
            {!hasChildren && (
              <MenuItem2
                key={`${menuItem.displayText}:${menuItem.displayIcon}`}
                icon={menuItem.displayIcon as IconName}
                text={menuItem.displayText}
                onClick={(evt) =>
                  menuItem.viewId &&
                  dispatch({
                    type: 'launchView',
                    viewId: menuItem.viewId,
                  })
                }
              ></MenuItem2>
            )}
          </>
        );
      })}
    </>
  );
}

export default BannerMenuInline;
