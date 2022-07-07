import { Icon, InputGroup } from '@blueprintjs/core';
import styles from './search.module.scss';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  return (
    <div className={styles['container']}>
      <InputGroup className={styles['search-input']}
        leftElement={
          <Icon
            onClick={(evt) => alert('search it !! :)')}
            icon="search"
          ></Icon>
        }
      ></InputGroup>
    </div>
  );
}

export default Search;
