import { ViewState } from '../use-view-states/use-view-states';
import styles from './shell-nav.module.scss';

/* eslint-disable-next-line */
export interface ShellNavProps {
  items: ViewState[];
}

export function ShellNav(props: ShellNavProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ShellNav!</h1>
      {props.items.map(item => <p key={item.key}>{item.displayText}</p>)}
    </div>
  );
}

export default ShellNav;
