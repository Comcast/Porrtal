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
import { Box, ClickAwayListener, Popper } from '@mui/material';
import {
  SearchProps,
  useIsSearchDialogOpen,
  useSearchAction,
  useShellComponents,
} from '@porrtal/r-shell';
import { useEffect, useRef, useState } from 'react';
import SearchInput, { SearchInputRef } from '../search-input/search-input';
import { SearchViewStack } from '@porrtal/r-shell';
import styles from './search.module.scss';

export function Search(props: SearchProps) {
  const shellComponents = useShellComponents();
  const searchInputRef = useRef<SearchInputRef>();
  const searchAction = useSearchAction();
  const [bodyElement, setBodyElement] = useState<HTMLElement>();
  const isSearchDialogOpen = useIsSearchDialogOpen();
  useEffect(() => {
    setBodyElement(document.body);
  }, [isSearchDialogOpen]);

  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <>
        <SearchInput ref={searchInputRef}></SearchInput>
        <ClickAwayListener
          onClickAway={(evt) => searchAction.closeSearchDialog()}
        >
          <Popper
            nonce={'1'}
            onResize={() => {
              // do nothing
            }}
            onResizeCapture={() => {
              // do nothing
            }}
            className={styles['search-popper']}
            open={isSearchDialogOpen}
            onLoad={(evt) =>
              searchInputRef.current
                ? searchInputRef.current.input?.focus()
                : null
            }
            anchorEl={searchInputRef.current?.div}
            placement={'left'}
          >
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              <SearchViewStack
                width={
                  searchInputRef.current && searchInputRef.current.div
                    ? `${searchInputRef.current.div.offsetLeft - 50}px`
                    : '700px'
                }
                height={
                  bodyElement ? `${bodyElement.offsetHeight - 50}px` : '700px'
                }
              ></SearchViewStack>
            </Box>
          </Popper>
        </ClickAwayListener>
      </>
    );
  } else {
    return <div></div>;
  }
}

export default Search;
