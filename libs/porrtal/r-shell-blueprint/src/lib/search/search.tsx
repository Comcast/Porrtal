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
import { Popover2 } from '@blueprintjs/popover2';
import { SearchProps, useShellComponents } from '@porrtal/r-shell';
import { useIsSearchDialogOpen } from '@porrtal/r-shell';
import { useEffect, useRef, useState } from 'react';
import SearchInput, { SearchInputRef } from '../search-input/search-input';
import { SearchViewStack } from '@porrtal/r-shell';

/* eslint-disable-next-line */
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
