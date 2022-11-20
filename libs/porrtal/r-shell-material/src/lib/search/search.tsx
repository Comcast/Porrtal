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
