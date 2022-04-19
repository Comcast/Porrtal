import { ShellLayout } from '@porrtal/shell';
import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      Porrtal Rocks !! :)
      <ShellLayout />
    </div>
  );
}

export default Index;
