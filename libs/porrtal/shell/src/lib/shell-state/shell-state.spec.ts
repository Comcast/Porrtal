import { act, renderHook } from '@testing-library/react-hooks';
import useShell from './shell-state';

describe('usePorrtalShell', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useShell());

    act(() => {
      expect(true).toBe(true);
    });

  });
});
