import { Box, Icon, Tab, Tabs } from '@mui/material';
import React, { useMemo } from 'react';
import { useShellDispatch, ViewHost, ViewStackProps } from '@porrtal/shell';
import styles from './view-stack.module.scss';

export function ViewStack(props: ViewStackProps) {
  const dispatch = useShellDispatch();
  const currentIndex = useMemo(() => {
    for (let ii=0; ii < props.pane.viewStates.length; ii++) {
      if (props.pane.viewStates[ii].key === props.pane.currentKey) {
        return ii;
      }
    }
    return -1;
  }, [props.pane]);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    dispatch({
      type: 'setCurrentViewStateKey',
      key: props.pane.viewStates[newIndex].key,
      pane: props.pane
    });
  };

  return (
    <div className={styles['container']}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: 'gainsboro',
        }}
      >
        <Tabs
          value={currentIndex}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
          className={styles['tabs']}
        >
          {props.pane.viewStates.map((item, index) => (
            <Tab
              key={item.key}
              icon={
                <Icon style={{ position: 'relative', top: '3px' }}>
                  {item.displayIcon}
                </Icon>
              }
              iconPosition="start"
              label={
                <span>
                  {item.displayText}&nbsp;
                  <Icon
                    style={{ position: 'relative', top: '5px' }}
                    onClick={(evt) => {
                      dispatch({ type: 'deleteViewState', key: item.key });
                      evt.stopPropagation();
                    }}
                  >
                    clear
                  </Icon>
                </span>
              }
            ></Tab>
          ))}
        </Tabs>
      </Box>
      <div className={styles['view-host-container']}>
        {props.pane.viewStates.map((item, index) => (
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
            right: 0,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ViewStack;
