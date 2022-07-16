import { Popover2 } from '@blueprintjs/popover2';
import { useShellComponents } from '@porrtal/shell';
import { useIsSearchDialogOpen } from '@porrtal/shell';
import { useEffect, useRef, useState } from 'react';
import SearchInput, { SearchInputRef } from '../search-input/search-input';
import SearchViewStack from '../search-view-stack/search-view-stack';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  const shellComponents = useShellComponents();
  const searchInputRef = useRef<SearchInputRef>();
  const [bodyElement, setBodyElement] = useState<HTMLElement>();
  const isSearchDialogOpen = useIsSearchDialogOpen();
  useEffect(() => {
    setBodyElement(document.body);
  }, [isSearchDialogOpen]);

  console.log('search');

  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <Popover2
        isOpen={isSearchDialogOpen}
        onOpened={(evt) =>
          searchInputRef.current ? searchInputRef.current.input?.focus() : null
        }
        enforceFocus={false}
        content={
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
        }
        placement="left-start"
      >
        <SearchInput ref={searchInputRef}></SearchInput>
      </Popover2>
    );
  } else {
    return <div></div>;
  }
}

export default Search;
