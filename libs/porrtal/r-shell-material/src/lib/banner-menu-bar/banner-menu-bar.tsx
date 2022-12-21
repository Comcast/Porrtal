import { Button, Icon } from '@mui/material';
import { PorrtalMenuItem } from '@porrtal/r-api';
import { BannerMenuBarProps, ShellAction, useShellDispatch } from '@porrtal/r-shell';
import { MenuItemData, NestedDropdown } from 'mui-nested-menu';
import styles from './banner-menu-bar.module.scss';

export function BannerMenuBar(props: BannerMenuBarProps) {
  const dispatch = useShellDispatch();
  return (
    <div className={styles['container']}>
      {props.menuItems
        .filter((menuItem) => menuItem.displayText !== 'inline')
        .map((menuItem) => {
          const hasChildren =
            menuItem.childMenu && menuItem.childMenu.length > 0;
          return (
            <>
              {hasChildren && (
                <NestedDropdown
                  key={`${menuItem.displayText}:${menuItem.displayIcon}`}
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
  dispatch: React.Dispatch<ShellAction>
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
      newMenuItemData.callback = () => menuItem.viewId && dispatch({
        type: 'launchView',
        viewId: menuItem.viewId
      })
    }
    ret.push(newMenuItemData);
  });
  return ret;
}

export default BannerMenuBar;
