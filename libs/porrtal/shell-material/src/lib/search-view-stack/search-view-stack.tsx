import styles from './search-view-stack.module.scss';

/* eslint-disable-next-line */
export interface SearchViewStackProps {}

export function SearchViewStack(props: SearchViewStackProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SearchViewStack!</h1>
    </div>
  );
}

export default SearchViewStack;
