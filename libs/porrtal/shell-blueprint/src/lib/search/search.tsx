import { Icon, InputGroup } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { useShellComponents, useShellState } from '@porrtal/shell';
import { useEffect, useRef, useState } from 'react';
import styles from './search.module.scss';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const shellComponents = useShellComponents();
  const shellState = useShellState();
  const [bodyElement, setBodyElement] = useState<HTMLElement>();
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setBodyElement(document.body);

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDialogOpen) {
        event.preventDefault();
        setIsDialogOpen(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [isDialogOpen]);

  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <Popover2
        isOpen={isDialogOpen}
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
              onClose={(evt) => setIsDialogOpen(false)}
            ></shellComponents.ViewStack>
          </div>
        }
        placement="left-start"
      >
        <div ref={divRef}>
          <InputGroup
            onChange={(evt) => setIsDialogOpen(true)}
            className={styles['search-input']}
            inputRef={inputRef}
            leftElement={
              <Icon
                onClick={(evt) => setIsDialogOpen(true)}
                icon="search"
              ></Icon>
            }
          ></InputGroup>
        </div>
      </Popover2>
    );
  } else {
    return <div></div>;
  }
}

export default Search;
