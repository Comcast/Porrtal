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
*/import React from 'react';
import { nestedMenuItemsFromObject } from 'mui-nested-menu';
import Button, { ButtonProps } from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { MenuItemData } from 'mui-nested-menu';

interface NestedDropdownProps {
	children?: React.ReactNode;
	menuItemsData?: MenuItemData;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	ButtonProps?: Partial<ButtonProps>;
	MenuProps?: Partial<MenuProps>;
    startIcon?: React.ReactNode;
}

export const NestedDropdown = React.forwardRef<
	HTMLDivElement | null,
	NestedDropdownProps
>(function NestedDropdown(props, ref) {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null
	);
	const open = Boolean(anchorEl);

	const {
		menuItemsData: data,
		onClick,
		ButtonProps,
		MenuProps,
		...rest
	} = props;

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
		onClick && onClick(e);
	};
	const handleClose = () => setAnchorEl(null);

	const menuItems = nestedMenuItemsFromObject({
		menuItemsData: data?.items ?? [],
		isOpen: open,
		handleClose,
	});

	return (
		<div ref={ref} {...rest}>
			<Button startIcon={props.startIcon} onClick={handleClick} endIcon={<ChevronDown />} {...ButtonProps}>
				{data?.label}
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				{...MenuProps}
			>
				{menuItems}
			</Menu>
		</div>
	);
});

export const ChevronDown = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props}>
			<path d='M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'></path>
		</SvgIcon>
	);
};

export const ChevronRight = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props}>
			<path d='M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z'></path>
		</SvgIcon>
	);
};
