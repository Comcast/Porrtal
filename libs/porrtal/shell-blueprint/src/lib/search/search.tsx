import styles from './search.module.scss';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Search!</h1>
    </div>
  );
}

export default Search;
