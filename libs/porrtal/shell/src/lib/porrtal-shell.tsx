import styles from './porrtal-shell.module.scss';

/* eslint-disable-next-line */
export interface PorrtalShellProps {}

export function PorrtalShell(props: PorrtalShellProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PorrtalShell!</h1>
    </div>
  );
}

export default PorrtalShell;
