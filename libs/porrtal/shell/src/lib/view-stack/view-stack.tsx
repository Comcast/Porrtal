import { Icon, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { ViewState } from '../use-view-states/use-view-states';
import ViewHost from '../view-host/view-host';
import styles from './view-stack.module.scss';

/* eslint-disable-next-line */
export interface ViewStackProps {
  arrange: 'tabs-top' | 'tabs-left' | 'cards';
  items: ViewState[];
}

export function ViewStack(props: ViewStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles['container']}>
      <div>
        <Tabs
          value={currentIndex}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
        >
          {props.items.map((item) => (
            <Tab
              key={item.key}
              icon={<Icon>{item.displayIcon}</Icon>}
              iconPosition="start"
              label={item.displayText}
            ></Tab>
          ))}
        </Tabs>
      </div>
      <div className={styles['view-host-container']}>
        {props.items.map((item, index) => (
          <ViewHost
            key={item.key}
            viewState={item}
            zIndex={index === currentIndex ? 10 : 0}
          ></ViewHost>
        ))}
        <div
          style={{
            zIndex: 5,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
           }}
        ></div>
      </div>
    </div>
  );
}

export default ViewStack;
