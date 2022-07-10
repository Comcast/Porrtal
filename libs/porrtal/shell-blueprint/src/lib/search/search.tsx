import { Icon, InputGroup } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { useSearchText, useShellComponents, useShellState } from '@porrtal/shell';
import { useIsSearchDialogOpen, useSearchAction } from '@porrtal/shell';
import { useEffect, useRef, useState } from 'react';
import styles from './search.module.scss';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  const shellComponents = useShellComponents();
  const shellState = useShellState();
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [bodyElement, setBodyElement] = useState<HTMLElement>();
  const isSearchDialogOpen = useIsSearchDialogOpen();
  const searchAction = useSearchAction();
  const searchText = useSearchText();
  useEffect(() => {
    setBodyElement(document.body);
  }, [isSearchDialogOpen]);

  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <Popover2
        isOpen={isSearchDialogOpen}
        onOpened={(evt) => (inputRef ? inputRef.current?.focus() : null)}
        enforceFocus={false}
        // onClose={(evt) => setIsDialogOpen(false)}
        content={
          <div
            className={styles['search-container']}
            style={{
              width: divRef.current
                ? `${divRef.current.offsetLeft - 50}px`
                : '700px',
              height: bodyElement
                ? `${bodyElement.offsetHeight - 50}px`
                : '700px',
            }}
          >
            <shellComponents.ViewStack
              pane={shellState.panes.search}
              onClose={(evt) => searchAction.closeSearchDialog()}
            ></shellComponents.ViewStack>
          </div>
        }
        placement="left-start"
      >
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
      </Popover2>
    );
  } else {
    return <div></div>;
  }
}

export default Search;
