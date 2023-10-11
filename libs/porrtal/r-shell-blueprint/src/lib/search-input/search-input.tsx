/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
import { Icon, InputGroup } from '@blueprintjs/core';
import { useSearchAction, useSearchText } from '@porrtal/r-shell';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './search-input.module.scss';

/* eslint-disable-next-line */
export interface SearchInputProps {}

export interface SearchInputRef {
  div: HTMLDivElement | null;
  input: HTMLInputElement | null;
}

export const SearchInput = forwardRef<
  SearchInputRef | undefined,
  SearchInputProps
>((props, ref) => {
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchAction = useSearchAction();
  const searchText = useSearchText();
  useImperativeHandle(ref, () => ({
    get div() {
      return divRef.current;
    },

    get input() {
      return inputRef.current;
    },
  }));

  console.log('search input');

  return (
    <div ref={divRef}>
      <InputGroup
        onChange={(evt) => {
          searchAction.openSearchDialog();
          searchAction.setSearchText(evt.target.value);
        }}
        className={styles['search-input']}
        inputRef={inputRef}
        leftElement={
          <Icon
            onClick={(evt) => searchAction.openSearchDialog()}
            icon="search"
          ></Icon>
        }
        value={searchText}
      ></InputGroup>
    </div>
  );
});

export default SearchInput;
