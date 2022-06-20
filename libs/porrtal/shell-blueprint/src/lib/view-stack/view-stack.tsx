import styles from './view-stack.module.scss';
import { Tab, Tabs, Icon } from '@blueprintjs/core';
import { useEffect, useState } from 'react';
import { ViewHost, ViewStackProps } from '@porrtal/shell';

export function ViewStack(props: ViewStackProps) {
  const [currentTabId, setCurrentTabId] = useState<string>(
    props.items.length > 0 ? props.items[0].key : ''
  );
  useEffect(() => {
    if (!currentTabId && props?.items?.length) {
      setCurrentTabId(props.items[0].key);
    }
  }, [props.items, currentTabId]);

  return (
    <Tabs
      animate={true}
      id="ViewStack"
      key={'horizontal'}
      renderActiveTabPanelOnly={false}
      vertical={false}
      onChange={(evt) => setCurrentTabId(evt.toLocaleString())}
      selectedTabId={currentTabId}
      className={styles['tabs']}
    >
      {props.items.map((item) => (
        <Tab
          id={item.key}
          key={item.key}

          title={<span><Icon icon={item.displayIcon} />&nbsp;{item.displayText}</span>}
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
