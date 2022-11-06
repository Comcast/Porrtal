import styles from './docs.module.scss';

/* eslint-disable-next-line */
export interface DocsProps {}

export function Docs(props: DocsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Docs!</h1>
    </div>
  );
}

export default Docs;
