import { act, renderHook } from '@testing-library/react-hooks';
import useViewStates from './use-view-states';

describe('useViewStates', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useViewStates());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
