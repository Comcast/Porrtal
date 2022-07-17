import {
  useSearchAction,
  useShellComponents,
  useShellState,
} from '@porrtal/shell';
import styles from './search-view-stack.module.scss';

/* eslint-disable-next-line */
export interface SearchViewStackProps {
  width: string;
  height: string;
}

export function SearchViewStack(props: SearchViewStackProps) {
  const shellComponents = useShellComponents();
  const shellState = useShellState();
  const searchAction = useSearchAction();

  console.log('search view stack');

  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <div
        className={styles['search-container']}
        style={{
          width: props.width,
          height: props.height,
        }}
      >
        <shellComponents.ViewStack
          pane={shellState.panes.search}
          onClose={(evt) => searchAction.closeSearchDialog()}
        ></shellComponents.ViewStack>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default SearchViewStack;
