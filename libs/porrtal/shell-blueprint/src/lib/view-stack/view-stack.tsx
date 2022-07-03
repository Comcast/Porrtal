import styles from './view-stack.module.scss';
import {
  Tab,
  Tabs,
  Icon,
  Menu,
  MenuItem,
  MenuDivider,
} from '@blueprintjs/core';
import { useEffect } from 'react';
import { useShellDispatch, ViewHost, ViewStackProps } from '@porrtal/shell';
import { ContextMenu2 } from '@blueprintjs/popover2';
import { PaneArrangement, paneArrangements, PaneType, paneTypes } from '@porrtal/api';

export function ViewStack(props: ViewStackProps) {
  const dispatch = useShellDispatch();
  useEffect(() => {
    if (!props.pane.currentKey && props?.pane?.viewStates?.length && dispatch) {
      dispatch({
        type: 'setCurrentViewStateByKey',
        pane: props.pane,
        key: props.pane.viewStates[0].key,
      });
    }
  }, [props.pane, dispatch]);

  const moveIcons: { [key in PaneType]: string } = {
    nav: 'arrow-left',
    main: 'arrow-up',
    bottom: 'arrow-down',
    right: 'arrow-right',
    search: 'clear',
  };

  const arrangeIcons: { [key in PaneArrangement]: string } = {
    "tabs-top": '',
    "tabs-left": '',
    "cards": ''
  };

  return (
    <Tabs
      animate={true}
      id="ViewStack"
      key={'horizontal'}
      renderActiveTabPanelOnly={false}
      vertical={false}
      onChange={(evt) =>
        dispatch({
          type: 'setCurrentViewStateByKey',
          pane: props.pane,
          key: evt.toLocaleString(),
        })
      }
      selectedTabId={props.pane.currentKey}
      className={styles['tabs']}
    >
      {props.pane.viewStates.map((item) => (
        <Tab
          id={item.key}
          key={item.key}
          title={
            <ContextMenu2
              content={
                <Menu>
                  {/* <MenuDivider /> */}
                  <MenuItem text="Arrange..." icon="column-layout" intent="primary">
                    {paneArrangements
                      .map((paneArrangement) => (
                        <MenuItem
                          key={`arrange-${paneArrangement}`}
                          icon={props.pane.arrange === paneArrangement ? 'tick' : ''}
                          text={`${paneArrangement}`}
                          onClick={() =>
                            dispatch({
                              type: 'arrangePane',
                              pane: props.pane,
                              paneArrangement,
                            })
                          }
                        />
                      ))}
                  </MenuItem>
                  <MenuItem text="Move to..." icon="move" intent="primary">
                    {paneTypes
                      .filter(
                        (paneType) =>
                          paneType !== 'search' &&
                          paneType !== props.pane.paneType
                      )
                      .map((paneType) => (
                        <MenuItem
                          key={`move-to-${paneType}`}
                          icon={moveIcons[paneType]}
                          text={`${paneType} pane`}
                          onClick={() =>
                            dispatch({
                              type: 'moveView',
                              key: item.key,
                              toPane: paneType,
                            })
                          }
                        />
                      ))}
                  </MenuItem>
                </Menu>
              }
            >
              <span>
                &nbsp;
                <Icon icon={item.displayIcon} />
                &nbsp;{item.displayText}&nbsp;
                <Icon
                  icon="delete"
                  onClick={(evt) => {
                    dispatch({ type: 'deleteViewState', key: item.key });
                    evt.stopPropagation();
                  }}
                />
              </span>
            </ContextMenu2>
          }
          panel={
            <div className={styles['viewHostContainer']}>
              <ViewHost key={item.key} viewState={item}></ViewHost>
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
