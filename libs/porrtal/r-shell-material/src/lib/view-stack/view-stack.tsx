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
import React, { Dispatch, useMemo } from 'react';
import {
  ShellAction,
  useShellDispatch,
  ViewHost,
  ViewStackProps,
} from '@porrtal/r-shell';
import styles from './view-stack.module.scss';
import { ContextMenu, NestedMenuItem, IconMenuItem } from 'mui-nested-menu';
import {
  paneArrangements,
  PaneType,
  paneTypes,
  ViewState,
} from '@porrtal/r-api';

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
          <ViewHost
            key={item.key}
            viewState={item}
            zIndex={index === props.currentIndex ? 10 : 0}
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

function ViewStackTabsLeft(
  props: ViewStackProps & {
    dispatch: Dispatch<ShellAction>;
    currentIndex: number;
    handleChange: (event: React.SyntheticEvent, newIndex: number) => void;
  }
) {
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
                ></ViewStackContextMenu>
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
            zIndex={index === props.currentIndex ? 10 : 0}
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

function ViewStackCards(
  props: ViewStackProps & {
    dispatch: Dispatch<ShellAction>;
    currentIndex: number;
    handleChange: (event: React.SyntheticEvent, newIndex: number) => void;
  }
) {
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
                  ></ViewStackContextMenu>
                </Button>
              }
            ></CardHeader>
            <CardContent sx={{ position: 'relative' }}>
              <div className={styles['viewHostContainer']}>
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
  props: ViewStackProps & { dispatch: Dispatch<ShellAction>; item: ViewState }
) {
  const moveIcons: { [key in PaneType]: string } = {
    nav: 'arrow_circle_left_outlined',
    main: 'arrow_circle_up_outlined',
    bottom: 'arrow_circle_down_outlined',
    right: 'arrow_circle_right_outlined',
    search: 'clear',
  };

  const optionalMenus = [];
  if (props.pane.paneType !== 'search') {
    optionalMenus.push(
      <IconMenuItem
        key="close-tab"
        leftIcon={<Icon>clear</Icon>}
        label="close tab"
        onClick={
          ((evt: React.MouseEvent<HTMLElement>) => {
            props.dispatch({ type: 'deleteViewState', key: props.item.key });
            evt.stopPropagation();
          }) as () => void
        }
      ></IconMenuItem>,
      <Divider key="divider-1" />
    );
  }

  if (
    props.showUserInfo &&
    props.item.userInfo &&
    props.item.userInfo.length > 0
  ) {
    optionalMenus.push(
      <NestedMenuItem
        key={'userInfo'}
        leftIcon={<Icon>info</Icon>}
        parentMenuOpen={true}
        label={'Info...'}
        nonce={1}
        >
        {props.item.userInfo.map((info) => (
          <IconMenuItem
            key={`userInfo-${info.state ? info.state['displayText'] : 'help'}`}
            leftIcon={
              <Icon className="material-icons-outlined">
                {info.state ? (info.state['displayIcon'] as string) : 'help'}
              </Icon>
            }
            label={info.state ? (info.state['displayText'] as string) : 'help'}
            onClick={() =>
              props.dispatch({
                type: 'launchView',
                viewId: info.viewId,
                state: info.state,
              })
            }
          ></IconMenuItem>
        ))}
      </NestedMenuItem>
    );
  }

  if (
    props.showDevInfo &&
    props.item.devInfo &&
    props.item.devInfo.length > 0
  ) {
    optionalMenus.push(
      <NestedMenuItem
        key={'userInfo'}
        leftIcon={<Icon>build</Icon>}
        parentMenuOpen={true}
        label={'Dev Info...'}
        nonce={1}
        >
        {props.item.devInfo.map((info) => (
          <IconMenuItem
            key={`devInfo-${
              info.state ? info.state['displayText'] : 'dev help'
            }`}
            leftIcon={
              <Icon className="material-icons-outlined">
                {info.state ? (info.state['displayIcon'] as string) : 'build'}
              </Icon>
            }
            label={
              info.state ? (info.state['displayText'] as string) : 'dev help'
            }
            onClick={() =>
              props.dispatch({
                type: 'launchView',
                viewId: info.viewId,
                state: info.state,
              })
            }
          ></IconMenuItem>
        ))}
      </NestedMenuItem>
    );
  }

  if (
    (props.showUserInfo &&
      props.item.userInfo &&
      props.item.userInfo.length > 0) ||
    (props.showDevInfo && props.item.devInfo && props.item.devInfo.length > 0)
  ) {
    optionalMenus.push(<Divider key="divider-1" />);
  }

  return (
    <ContextMenu
      menuItems={[
        ...optionalMenus,
        <NestedMenuItem
          key={'arrange'}
          leftIcon={<Icon>pivot_table_chart</Icon>}
          parentMenuOpen={true}
          label={'Arrange...'}
          nonce={1}
        >
          {paneArrangements.map((paneArrangement) => (
            <IconMenuItem
              key={`arrange-${paneArrangement}`}
              leftIcon={
                <Icon className="material-icons-outlined">
                  {props.pane.arrange === paneArrangement ? 'done' : ''}
                </Icon>
              }
              label={`${paneArrangement}`}
              onClick={() =>
                props.dispatch({
                  type: 'arrangePane',
                  pane: props.pane,
                  paneArrangement,
                })
              }
            ></IconMenuItem>
          ))}
        </NestedMenuItem>,
        <NestedMenuItem
          key={'move'}
          leftIcon={<Icon>open_with</Icon>}
          parentMenuOpen={true}
          label={'Move to...'}
          nonce={1}
        >
          {paneTypes
            .filter(
              (paneType) =>
                paneType !== 'search' && paneType !== props.pane.paneType
            )
            .map((paneType) => (
              <IconMenuItem
                key={`move-to-${paneType}`}
                leftIcon={
                  <Icon className="material-icons-outlined">
                    {moveIcons[paneType]}
                  </Icon>
                }
                label={`${paneType} pane`}
                onClick={() =>
                  props.dispatch({
                    type: 'moveView',
                    key: props.item.key,
                    toPane: paneType,
                  })
                }
              ></IconMenuItem>
            ))}
        </NestedMenuItem>,
      ]}
    >
      {props.pane.arrange !== 'tabs-left' && (
        <span>
          <Icon style={{ position: 'relative', top: '5px' }}>
            {props.item.displayIcon}
          </Icon>
          &nbsp;
          {props.item.displayText}&nbsp;
          <Icon
            style={{ position: 'relative', top: '5px' }}
            onClick={(evt) => {
              props.dispatch({ type: 'deleteViewState', key: props.item.key });
              evt.stopPropagation();
            }}
          >
            clear
          </Icon>
        </span>
      )}
      {props.pane.arrange === 'tabs-left' && (
        <Tooltip title={props.item.displayText} placement="right">
          <Icon style={{ position: 'relative', top: '3px', fontSize: '2rem' }}>
            {props.item.displayIcon}
          </Icon>
        </Tooltip>
      )}
    </ContextMenu>
  );
}
