import { renderHook } from '@testing-library/react';
import { combineViewStateStateAndActionState, ShellState } from './shell-state';

describe('ShellState', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() =>
      ShellState({
        components: {},
      })
    );

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
});
