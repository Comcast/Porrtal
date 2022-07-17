import styles from './search-input.module.scss';

/* eslint-disable-next-line */
export interface SearchInputProps {}

export function SearchInput(props: SearchInputProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SearchInput!</h1>
    </div>
  );
}

export default SearchInput;
