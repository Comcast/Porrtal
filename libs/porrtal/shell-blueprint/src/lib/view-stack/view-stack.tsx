import styles from './view-stack.module.scss';
import { Tab, Tabs, Icon } from '@blueprintjs/core';
import { useEffect } from 'react';
import { useShellDispatch, ViewHost, ViewStackProps } from '@porrtal/shell';

export function ViewStack(props: ViewStackProps) {
  const dispatch = useShellDispatch();
  useEffect(() => {
    if (!props.pane.currentKey && props?.pane?.viewStates?.length && dispatch) {
      dispatch({
        type: 'setCurrentViewStateKey',
        key: props.pane.viewStates[0].key,
      });
    }
  }, [props.pane, dispatch]);

  return (
    <Tabs
      animate={true}
      id="ViewStack"
      key={'horizontal'}
      renderActiveTabPanelOnly={false}
      vertical={false}
      onChange={(evt) => dispatch({
        type: 'setCurrentViewStateKey',
        key: evt.toLocaleString(),
      })}
      selectedTabId={props.pane.currentKey}
      className={styles['tabs']}
    >
      {props.pane.viewStates.map((item) => (
        <Tab
          id={item.key}
          key={item.key}
          title={
            <span>
              <Icon icon={item.displayIcon} />
              &nbsp;{item.displayText}
            </span>
          }
          panel={
            <div className={styles['viewHostContainer']}>
              <ViewHost key={item.key} viewState={item} zIndex={0}></ViewHost>
            </div>
          }
          className={styles['tab']}
        />
      ))}
      <Tabs.Expander />
    </Tabs>
  );
}

export default ViewStack;
