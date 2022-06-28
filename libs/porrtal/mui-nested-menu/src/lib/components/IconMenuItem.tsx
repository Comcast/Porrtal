import React, {forwardRef, RefObject} from 'react';
import {MenuItem, MenuItemProps, Typography} from '@mui/material';
import {Box, styled} from '@mui/system';
import styles from './IconMenuItem.module.scss';

const FlexBox = styled(Box)({
  display: 'flex',
});

interface IconMenuItemProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  label?: string;
  className?: string;
  MenuItemProps?: MenuItemProps;
  ref?: RefObject<HTMLLIElement>;
}

const IconMenuItem = forwardRef<HTMLLIElement, IconMenuItemProps>(
  (
    {leftIcon, rightIcon, onClick, label, MenuItemProps, className, ...props},
    ref,
  ) => {
    return (
      <MenuItem
        {...MenuItemProps}
        ref={ref}
        className={`${className} ${styles['styledMenuItem']}`}
        onClick={onClick}
        {...props}
      >
        <FlexBox>
          {leftIcon}
          <span className={styles['styledLabel']}>{label}</span>
        </FlexBox>
        {rightIcon}
      </MenuItem>
    );
  },
);

IconMenuItem.displayName = 'IconMenuItem';
export {IconMenuItem};
