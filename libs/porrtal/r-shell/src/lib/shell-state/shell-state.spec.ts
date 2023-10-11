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
import { renderHook } from '@testing-library/react';
import {
  combineViewStateStateAndActionState,
  ShellState,
  updateMenus,
} from './shell-state';

describe('ShellState', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => ShellState({}));

    expect(result).toBeTruthy();
  });
});

describe('combineViewStateStateAndActionState', () => {
  it('should return viewStateState when actionState not defined', () => {
    const viewStateState = { a: 'one' };
    const actionState = undefined;
    const resultState = combineViewStateStateAndActionState(
      viewStateState,
      actionState
    );
    expect(resultState).toBe(viewStateState);
  });

  it('should return actionState when viewStateState not defined', () => {
    const viewStateState = undefined;
    const actionState = { a: 'one' };
    const resultState = combineViewStateStateAndActionState(
      viewStateState,
      actionState
    );
    expect(resultState).toBe(actionState);
  });

  it('should return a combined object', () => {
    const viewStateState = { a: 'one' };
    const actionState = { b: 'two' };
    const resultState = combineViewStateStateAndActionState(
      viewStateState,
      actionState
    );
    expect(resultState).toEqual({ a: 'one', b: 'two' });
  });

  it('should combine and overwrite with actionState', () => {
    const viewStateState = { a: 'one', b: 'first' };
    const actionState = { b: 'two' };
    const resultState = combineViewStateStateAndActionState(
      viewStateState,
      actionState
    );
    expect(resultState).toEqual({ a: 'one', b: 'two' });
  });

  it('should combine and overwrite with actionState nested object', () => {
    const viewStateState = { a: 'one', b: 'first' };
    const actionState = { b: { c: 'two' } };
    const resultState = combineViewStateStateAndActionState(
      viewStateState,
      actionState
    );
    expect(resultState).toEqual({ a: 'one', b: { c: 'two' } });
  });

  it('should add menu items', () => {
    const menu = [
      {
        displayText: 'one',
        childMenu: [
          {
            displayText: 'a',
            viewId: '1',
          },
          {
            displayText: 'b',
            viewId: '2',
          },
        ],
      },
    ];
    let res = updateMenus(
      {
        displayText: '',
        componentName: '',
        componentModule: '',
        viewId: '1',
        menu: 'one.a',
      },
      undefined
    );
    res = updateMenus(
      {
        displayText: '',
        componentName: '',
        componentModule: '',
        viewId: '2',
        menu: 'one.b',
      },
      res
    );
    expect(res).toEqual(menu);
  });

  it('should add menu items 2', () => {
    const menu = [
      {
        displayText: 'inline',
        childMenu: [
          {
            displayIcon: 'gear',
            childMenu: [
              { displayText: 'my-setting-1', viewId: '1' },
              {
                displayText: 'b',
                viewId: '2',
              },
            ],
          },
        ],
      },
    ];
    let res = updateMenus(
      {
        displayText: '',
        componentName: '',
        componentModule: '',
        viewId: '1',
        menu: 'inline.:gear.my-setting-1',
      },
      undefined
    );
    res = updateMenus(
      {
        displayText: '',
        componentName: '',
        componentModule: '',
        viewId: '2',
        menu: 'inline.:gear.b',
      },
      res
    );
    expect(res).toEqual(menu);
  });
});
