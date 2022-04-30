import { act, renderHook } from '@testing-library/react-hooks';
import usePorrtalShell from './use-porrtal-shell';

describe('usePorrtalShell', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => usePorrtalShell());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
