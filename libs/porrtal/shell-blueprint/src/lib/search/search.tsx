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
  const [dialogBoundary, setDialogBoundary] = useState<HTMLElement>();
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => setDialogBoundary(document.body), []);
  console.log('input group ref', divRef?.current?.offsetLeft);

  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      // <div className={styles['container']}>
      <Popover2
        // className={styles['search-dialog']}
        // boundary={dialogBoundary}
        // portalContainer={dialogBoundary}
        // targetTagName='div'
        // popoverClassName={styles['search-popover']}
        // portalClassName={styles['search-portal']}
        isOpen={isDialogOpen}
        onClose={(evt) => setIsDialogOpen(false)}
        content={
          <div
            className={styles['search-container']}
            style={{
              width: divRef.current
                ? `${divRef.current.offsetLeft - 50}px`
                : '700px',
              height: dialogBoundary
                ? `${dialogBoundary.offsetHeight - 50}px`
                : '700px',
            }}
          >
            <shellComponents.ViewStack
              pane={shellState.panes.search}
            ></shellComponents.ViewStack>
          </div>
        }
        placement="left-start"
      >
        <div ref={divRef}>
          <InputGroup
            className={styles['search-input']}
            leftElement={
              <Icon
                onClick={(evt) => setIsDialogOpen(true)}
                icon="search"
              ></Icon>
            }
          ></InputGroup>
        </div>
      </Popover2>
      // </div>
    );
  } else {
    return <div></div>;
  }
}

export default Search;
