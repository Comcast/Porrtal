import { ViewState } from '../use-view-states/use-view-states';
import styles from './view-stack.module.scss';

/* eslint-disable-next-line */
export interface ViewStackProps {
  arrange: 'tabs-top' | 'tabs-left' | 'cards';
  items: ViewState[];
}

export function ViewStack(props: ViewStackProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ViewStack!</h1>
      {props.items.map(item => <p key={item.key}>{item.displayText}</p>)}
    </div>
  );
}

export default ViewStack;
