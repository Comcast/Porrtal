import { act, renderHook } from '@testing-library/reacts';
import useAuth from './use-auth';

describe('useAuth', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
