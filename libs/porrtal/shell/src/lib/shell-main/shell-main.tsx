import { ViewState } from '../use-view-states/use-view-states';
import styles from './shell-main.module.scss';

/* eslint-disable-next-line */
export interface ShellMainProps {
  items: ViewState[];
}

export function ShellMain(props: ShellMainProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ShellMain!</h1>
      {props.items.map(item => <p key={item.key}>{item.displayText}</p>)}
    </div>
  );
}

export default ShellMain;
