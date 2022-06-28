import React, {useState, forwardRef} from 'react';
import {Menu} from '@mui/material';
import {nestedMenuItemsFromObject} from './nestedMenuItemsFromObject';
import {MenuItemData} from '../definitions';

export interface ContextMenuProps {
  children?: React.ReactNode;
  menuItemsData?: MenuItemData[];
}

interface Position {
  top: number;
  left: number;
}

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({children, menuItemsData}, ref) => {
    const [menuPosition, setMenuPosition] = useState<Position | undefined>();

    const [mouseDownPosition, setMouseDownPosition] = useState<Position>();

    const handleItemClick = () => setMenuPosition(undefined);

    const handleMouseDown = (e: React.MouseEvent) => {
      if (menuPosition !== null) setMenuPosition(undefined);

      if (e.button !== 2) return;

      setMouseDownPosition({top: e.clientY, left: e.clientX});
    };

    const handleMouseUp = (e: React.MouseEvent) => {
      const top = e.clientY;
      const left = e.clientX;

      if (!mouseDownPosition) return;

      if (mouseDownPosition.top === top && mouseDownPosition.left === left) {
        setMenuPosition({top: e.clientY, left: e.clientX});
      }
    };

    const menuItems = nestedMenuItemsFromObject({
      menuItemsData: menuItemsData,
      isOpen: !!menuPosition,
      handleClose: handleItemClick,
    });

    return (
      <div
        ref={ref}
        onContextMenu={e => e.preventDefault()}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Menu
          onContextMenu={e => e.preventDefault()}
          open={!!menuPosition}
          onClose={() => setMenuPosition(undefined)}
          anchorReference="anchorPosition"
          anchorPosition={menuPosition}
        >
          {menuItems}
        </Menu>
        {children}
      </div>
    );
  },
);

ContextMenu.displayName = 'ContextMenu';
export {ContextMenu};
