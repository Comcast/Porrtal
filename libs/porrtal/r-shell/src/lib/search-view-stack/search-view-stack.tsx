/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
import { useSearchAction } from '../search-state/search-state';
import { useShellComponents } from '../shell-components';
import { useShellState } from '../shell-state/shell-state';
import styles from './search-view-stack.module.scss';

/* eslint-disable-next-line */
export interface SearchViewStackProps {
  width: string;
  height: string;
}

export function SearchViewStack(props: SearchViewStackProps) {
  const shellComponents = useShellComponents();
  const shellState = useShellState();
  const searchAction = useSearchAction();

  console.log('search view stack');

  if (shellComponents && typeof window !== 'undefined' && window) {
    return (
      <div
        className={styles['search-container']}
        style={{
          width: props.width,
          height: props.height,
        }}
      >
        <shellComponents.ViewStack
          pane={shellState.panes.search}
          showUserInfo={shellState.showUserInfo}
          showDevInfo={shellState.showDevInfo}
          onClose={(evt) => searchAction.closeSearchDialog()}
        ></shellComponents.ViewStack>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default SearchViewStack;
