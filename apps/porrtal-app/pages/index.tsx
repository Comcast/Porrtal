import {
  PorrtalShellDispatch,
  PorrtalShellState,
  ShellLayout,
  UsePorrtalShell,
  usePorrtalShell,
} from '@porrtal/shell';
import styles from './index.module.scss';
import { testPorrtalShellState } from './test-view-states';

export function Index() {

  const porrtalShell: UsePorrtalShell = usePorrtalShell(testPorrtalShellState);

  return (
    <PorrtalShellState.Provider value={porrtalShell.state}>
      <PorrtalShellDispatch.Provider value={porrtalShell.dispatch}>
      <div className={styles.page}>
        <ShellLayout />
      </div>
      </PorrtalShellDispatch.Provider>
    </PorrtalShellState.Provider>
  );
}

export default Index;
