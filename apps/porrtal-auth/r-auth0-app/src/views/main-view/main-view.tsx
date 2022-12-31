import styles from './main-view.module.scss';

/* eslint-disable-next-line */
export interface MainViewProps {}

export function MainView(props: MainViewProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MainView!</h1>
    </div>
  );
}

export default MainView;
