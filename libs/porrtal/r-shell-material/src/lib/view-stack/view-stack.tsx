/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Icon,
  Tab,
  Tabs,
  Tooltip,
} from '@mui/material';
import React, { Dispatch, useMemo, MouseEvent, useRef } from 'react';
import {
  ShellAction,
  useShellDispatch,
  ViewHost,
  ViewStackProps,
} from '@porrtal/r-shell';
import styles from './view-stack.module.scss';
import { NestedMenuItem, IconMenuItem } from 'mui-nested-menu';
import { ContextMenu } from '../context-menu/ContextMenu';
import {
  paneArrangements,
  PaneType,
  paneTypes,
  ViewState,
} from '@porrtal/r-api';
import { v4 as uuidv4 } from 'uuid';
import { MenuItemData } from 'mui-nested-menu';

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

  switch (props.pane.arrange) {
    case 'tabs-top':
      return (
        <ViewStackTabsTop
          pane={props.pane}
          showUserInfo={props.showUserInfo}
          showDevInfo={props.showDevInfo}
          currentIndex={currentIndex}
          dispatch={dispatch}
          handleChange={handleChange}
          onClose={props.onClose}
        />
      );

    case 'tabs-left':
      return (
        <ViewStackTabsLeft
          pane={props.pane}
          showUserInfo={props.showUserInfo}
          showDevInfo={props.showDevInfo}
          currentIndex={currentIndex}
          dispatch={dispatch}
          handleChange={handleChange}
        />
      );

    case 'cards':
      return (
        <ViewStackCards
          pane={props.pane}
          showUserInfo={props.showUserInfo}
          showDevInfo={props.showDevInfo}
          currentIndex={currentIndex}
          dispatch={dispatch}
          handleChange={handleChange}
        />
      );
  }

  return (
    <div>ViewStack Arrangement ('{props.pane.arrange}') Not Supported.</div>
  );
}

function ViewStackTabsTop(
  props: ViewStackProps & {
    dispatch: Dispatch<ShellAction>;
    currentIndex: number;
    handleChange: (event: React.SyntheticEvent, newIndex: number) => void;
  }
) {
  const viewHostRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className={`${styles['container']} ${styles[props.pane.arrange]}`}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: 'gainsboro',
        }}
      >
        <Tabs
          value={props.currentIndex}
          variant="scrollable"
          scrollButtons="auto"
          onChange={props.handleChange}
          className={styles['tabs']}
        >
          {props.pane.viewStates.map((item, index) => (
            <Tab
              key={item.key}
              label={
                <ViewStackContextMenu
                  pane={props.pane}
                  showUserInfo={props.showUserInfo}
                  showDevInfo={props.showDevInfo}
                  dispatch={props.dispatch}
                  item={item}
                  viewHostElement={viewHostRef.current?.[index]}
                ></ViewStackContextMenu>
              }
            ></Tab>
          ))}
          {props.onClose && (
            <Button
              className={styles['view-stack-close-button']}
              onClick={(evt) => (props.onClose ? props.onClose(evt) : null)}
            >
              <Icon>clear</Icon>
              <span>close</span>
            </Button>
          )}
        </Tabs>
      </Box>
      <div className={styles['view-host-container']}>
        {props.pane.viewStates.map((item, index) => (
          <div
            ref={(element) => {
              viewHostRef.current[index] = element;
            }}
          >
            <ViewHost
              key={item.key}
              viewState={item}
              zIndex={index === props.currentIndex ? 10 : 0}
            ></ViewHost>
          </div>
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

function ViewStackTabsLeft(
  props: ViewStackProps & {
    dispatch: Dispatch<ShellAction>;
    currentIndex: number;
    handleChange: (event: React.SyntheticEvent, newIndex: number) => void;
  }
) {
  const viewHostRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className={`${styles['container']} ${styles[props.pane.arrange]}`}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: 'gainsboro',
        }}
      >
        <Tabs
          value={props.currentIndex}
          variant="scrollable"
          scrollButtons="auto"
          onChange={props.handleChange}
          className={styles['tabs']}
          orientation="vertical"
        >
          {props.pane.viewStates.map((item, index) => (
            <Tab
              key={item.key}
              iconPosition="start"
              label={
                <ViewStackContextMenu
                  pane={props.pane}
                  showUserInfo={props.showUserInfo}
                  showDevInfo={props.showDevInfo}
                  dispatch={props.dispatch}
                  item={item}
                  viewHostElement={viewHostRef.current?.[index]}
                ></ViewStackContextMenu>
              }
            ></Tab>
          ))}
        </Tabs>
      </Box>
      <div className={styles['view-host-container']}>
        {props.pane.viewStates.map((item, index) => (
          <div
            ref={(element) => {
              viewHostRef.current[index] = element;
            }}
          >
            <ViewHost
              key={item.key}
              viewState={item}
              zIndex={index === props.currentIndex ? 10 : 0}
            ></ViewHost>
          </div>
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

function ViewStackCards(
  props: ViewStackProps & {
    dispatch: Dispatch<ShellAction>;
    currentIndex: number;
    handleChange: (event: React.SyntheticEvent, newIndex: number) => void;
  }
) {
  const viewHostRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className={styles['card-container']}>
      <div className={styles['cards']}>
        {props.pane.viewStates.map((item, index) => (
          <Card id={item.key} key={item.key} className={`${styles['card']}`}>
            <CardHeader
              sx={{
                padding: 0,
                backgroundColor:
                  index === props.currentIndex ? 'gainsboro' : '',
              }}
              title={
                <Button
                  onClick={(evt) => {
                    props.handleChange(evt, index);
                  }}
                >
                  <ViewStackContextMenu
                    pane={props.pane}
                    showUserInfo={props.showUserInfo}
                    showDevInfo={props.showDevInfo}
                    dispatch={props.dispatch}
                    item={item}
                    viewHostElement={viewHostRef.current?.[index]}
                  ></ViewStackContextMenu>
                </Button>
              }
            ></CardHeader>
            <CardContent sx={{ position: 'relative' }}>
              <div
                ref={(element) => {
                  viewHostRef.current[index] = element;
                }}
                className={styles['viewHostContainer']}
              >
                <ViewHost key={item.key} viewState={item}></ViewHost>
              </div>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ViewStack;

function ViewStackContextMenu(
  props: ViewStackProps & {
    dispatch: Dispatch<ShellAction>;
    viewHostElement: HTMLDivElement | null;
  } & {
    item: ViewState;
  }
) {
  const moveIcons: { [key in PaneType]: string } = {
    nav: 'arrow_circle_left_outlined',
    main: 'arrow_circle_up_outlined',
    bottom: 'arrow_circle_down_outlined',
    right: 'arrow_circle_right_outlined',
    search: 'clear',
  };

  const menuItemsData: MenuItemData[] = [
    {
      uid: 'maximize-tab',
      label: 'maximize tab',
      leftIcon: <Icon>north_east</Icon>,
      callback: () => {
        if (props.viewHostElement) {
          props.dispatch({
            type: 'maximize',
            htmlEl: props.viewHostElement,
            maximizeText: `${props.item.displayText}`,
          });
        }
      },
    },
    ...(props.pane.paneType !== 'search'
      ? [
          {
            uid: 'close-tab',
            label: 'close tab',
            leftIcon: <Icon>clear</Icon>,
            callback: () => {
              props.dispatch({ type: 'deleteViewState', key: props.item.key });
            },
          },
        ]
      : []),
    ...(props.showUserInfo &&
    props.item.userInfo &&
    props.item.userInfo.length > 0
      ? [
          ...props.item.userInfo.map((info) => ({
            uid: `info ${info.viewId}`,
            label: info.state
              ? (info.state['displayText'] as string)
              : 'user help',
            leftIcon: (
              <Icon className="material-icons-outlined">
                ,{info.state ? (info.state['displayIcon'] as string) : 'help'}
              </Icon>
            ),
            callback: () =>
              props.dispatch({
                type: 'launchView',
                viewId: info.viewId,
                state: info.state,
              }),
          })),
        ]
      : []),
    ...(props.showDevInfo && props.item.devInfo && props.item.devInfo.length > 0
      ? [
          ...props.item.devInfo.map((info) => ({
            uid: `info ${info.viewId}`,
            label: info.state
              ? (info.state['displayText'] as string)
              : 'dev help',
            leftIcon: (
              <Icon className="material-icons-outlined">
                ,{info.state ? (info.state['displayIcon'] as string) : 'build'}
              </Icon>
            ),
            callback: () =>
              props.dispatch({
                type: 'launchView',
                viewId: info.viewId,
                state: info.state,
              }),
          })),
        ]
      : []),
    {
      uid: 'Arrange...',
      label: 'Arrange...',
      leftIcon: <Icon>pivot_table_chart</Icon>,
      items: [
        ...paneArrangements.map((paneArrangement) => ({
          uid: paneArrangement,
          label: paneArrangement,
          leftIcon: (
            <Icon className="material-icons-outlined">
              {props.pane.arrange === paneArrangement ? 'done' : ''}
            </Icon>
          ),
          callback: () =>
            props.dispatch({
              type: 'arrangePane',
              pane: props.pane,
              paneArrangement,
            }),
        })),
      ],
    },
    ...(props.pane.paneType !== 'search'
      ? [
          {
            uid: 'Move to...',
            label: 'Move to...',
            leftIcon: <Icon>open_with</Icon>,
            items: [
              ...paneTypes
                .filter(
                  (paneType) =>
                    paneType !== 'search' && paneType !== props.pane.paneType
                )
                .map((paneType) => ({
                  uid: `${paneType} pane`,
                  label: `${paneType} pane`,
                  leftIcon: (
                    <Icon className="material-icons-outlined">
                      {moveIcons[paneType]}
                    </Icon>
                  ),
                  callback: () =>
                    props.dispatch({
                      type: 'moveView',
                      key: props.item.key,
                      toPane: paneType,
                    }),
                })),
            ],
          },
        ]
      : []),
    {
      uid: 'Copy link',
      label: 'Copy link',
      leftIcon: <Icon>content_copy</Icon>,
      callback: () =>
        props.dispatch({
          type: 'copyToClipboard',
          viewState: props.item,
        }),
    },
  ];

  return (
    <ContextMenu menuItemsData={menuItemsData}>
      {props.pane.arrange !== 'tabs-left' && (
        <div>
          <Icon style={{ position: 'relative', top: '5px' }}>
            {props.item.displayIcon}
          </Icon>
          &nbsp;
          <Icon
            onClick={() => {
              if (props.viewHostElement) {
                props.dispatch({
                  type: 'maximize',
                  htmlEl: props.viewHostElement,
                  maximizeText: `${props.item.displayText}`,
                });
              }
            }}
            style={{ position: 'relative', top: '5px' }}
          >
            north_east
          </Icon>
          &nbsp;
          {props.item.displayText}&nbsp;
          {props.pane.paneType !== 'search' && (
            <Icon
              style={{ position: 'relative', top: '5px' }}
              onClick={(evt) =>
                props.dispatch({ type: 'deleteViewState', key: props.item.key })
              }
            >
              clear
            </Icon>
          )}
        </div>
      )}
      {props.pane.arrange === 'tabs-left' && props.pane.paneType === 'nav' && (
        <div>
          <Tooltip title={props.item.displayText} placement="right">
            <Icon
              style={{ position: 'relative', top: '3px', fontSize: '2rem' }}
              onClick={(evt) => {
                props.dispatch({
                  type: 'toggleNav',
                  item: props.item,
                });
              }}
            >
              {props.item.displayIcon}
            </Icon>
          </Tooltip>
        </div>
      )}
      {props.pane.arrange === 'tabs-left' && props.pane.paneType !== 'nav' && (
        <div>
          <Tooltip title={props.item.displayText} placement="right">
            <Icon
              style={{ position: 'relative', top: '3px', fontSize: '2rem' }}
            >
              {props.item.displayIcon}
            </Icon>
          </Tooltip>
        </div>
      )}
    </ContextMenu>
  );
}
