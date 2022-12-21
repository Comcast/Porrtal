import {
  Button,
  ButtonGroup,
  IconName,
  Menu,
  MenuItem,
  Navbar,
} from '@blueprintjs/core';
import { MenuItem2, Popover2 } from '@blueprintjs/popover2';
import { BannerMenuBarProps, useShellDispatch } from '@porrtal/r-shell';
import styles from './banner-menu-bar.module.scss';

export function BannerMenuBar(props: BannerMenuBarProps) {
  const dispatch = useShellDispatch();
  return (
    <ButtonGroup minimal className={styles['container']}>
      {props.menuItems
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
                        <BannerMenuBarItem
                          menuItems={menuItem.childMenu}
                        ></BannerMenuBarItem>
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

export function BannerMenuBarItem(props: BannerMenuBarProps) {
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
                  <BannerMenuBarItem
                    menuItems={menuItem.childMenu}
                  ></BannerMenuBarItem>
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

export default BannerMenuBar;
