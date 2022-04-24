import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { ViewState } from '../use-view-states/use-view-states';
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
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to ViewStack!</h1>
      <Tabs value={currentIndex} onChange={handleChange}>
        {props.items.map(item => <Tab label={item.displayText}></Tab>)}
      </Tabs>
    </div>
  );
}

export default ViewStack;
