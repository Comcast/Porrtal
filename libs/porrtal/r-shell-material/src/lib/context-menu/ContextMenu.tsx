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
/*
NOTE: This file was copied and modified (see License agreement below)
   to fix an issue where menu callback was not called.
https://github.com/steviebaa/mui-nested-menu
*/

/*
The MIT License

Copyright © 2022 Steve Richardson https://github.com/steviebaa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import React, {useState, forwardRef} from 'react';
import Menu from '@mui/material/Menu';
import {MenuItemData, nestedMenuItemsFromObject} from 'mui-nested-menu';

export interface ContextMenuProps {
  children?: React.ReactNode;
  menuItemsData?: MenuItemData[];
}

interface Position {
  top: number;
  left: number;
}

export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({children, menuItems, menuItemsData}, ref) => {
    const [menuPosition, setMenuPosition] = useState<Position | null>(null);

    const handleItemClick = () => setMenuPosition(null);

    const handleContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      setMenuPosition({top: e.clientY, left: e.clientX});
    }

    const menuContents =
      menuItems ??
      (menuItemsData &&
        nestedMenuItemsFromObject({
          menuItemsData: menuItemsData,
          isOpen: !!menuPosition,
          handleClose: handleItemClick,
        }));

    return (
      <div
        ref={ref}
        onContextMenu={handleContextMenu}
      >
        <Menu
          onContextMenu={e => e.preventDefault()}
          open={!!menuPosition}
          onClose={() => setMenuPosition(null)}
          anchorReference="anchorPosition"
          anchorPosition={menuPosition ?? undefined}
        >
          {menuContents}
        </Menu>
        {children}
      </div>
    );
  },
);

ContextMenu.displayName = 'ContextMenu';
