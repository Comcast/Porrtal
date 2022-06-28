import { Box, Icon, Tab, Tabs } from '@mui/material';
import React, { useMemo } from 'react';
import { useShellDispatch, ViewHost, ViewStackProps } from '@porrtal/shell';
import styles from './view-stack.module.scss';
import { ContextMenu, NestedMenuItem, IconMenuItem } from 'mui-nested-menu';
import { PaneType, paneTypes } from '@porrtal/api';

export function ViewStack(props: ViewStackProps) {
  const dispatch = useShellDispatch();
  const currentIndex = useMemo(() => {
    for (let ii = 0; ii < props.pane.viewStates.length; ii++) {
      if (props.pane.viewStates[ii].key === props.pane.currentKey) {
        return ii;
      }
    }
    return -1;
  }, [props.pane]);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    dispatch({
      type: 'setCurrentViewStateByKey',
      key: props.pane.viewStates[newIndex].key,
      pane: props.pane,
    });
  };

  const moveIcons: { [key in PaneType]: string } = {
    nav: 'arrow_circle_left',
    main: 'arrow_circle_up',
    bottom: 'arrow_circle_down',
    right: 'arrow_circle_right',
    search: 'clear',
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
                <ContextMenu
                  menuItems={[
                    <NestedMenuItem parentMenuOpen={true} label={'move to'}>
                      {paneTypes
                        .filter(
                          (paneType) =>
                            paneType !== 'search' &&
                            paneType !== props.pane.paneType
                        )
                        .map((paneType) => (
                          <IconMenuItem
                            leftIcon={<Icon>{moveIcons[paneType]}</Icon>}
                            label={`${paneType} pane`}
                            onClick={() =>
                              alert(
                                `move key ('${item.key}') from pane('${props.pane.paneType}') to pane('${paneType}')`
                              )
                            }
                          ></IconMenuItem>
                        ))}
                    </NestedMenuItem>,
                  ]}
                >
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
                </ContextMenu>
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
