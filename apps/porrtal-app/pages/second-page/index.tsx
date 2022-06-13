import { KeycloakAuthentication } from '@porrtal/user';
import {
  PorrtalShellDispatch,
  PorrtalShellState,
  ShellLayout,
  UsePorrtalShell,
  usePorrtalShell,
} from '@porrtal/shell';
import styles from './index.module.scss';
import { testPorrtalShellState } from '../test-view-states';

export function Index() {
  const porrtalShell: UsePorrtalShell = usePorrtalShell(testPorrtalShellState);

  return (
    <KeycloakAuthentication
      uri="http://localhost:8080"
      realm="porrtal"
      clientId="porrtal-app"
      redirectUri="http://localhost:4200/second-page"
    >
      <PorrtalShellState.Provider value={porrtalShell.state}>
        <PorrtalShellDispatch.Provider value={porrtalShell.dispatch}>
          <div className={styles.page}>
            <ShellLayout />
          </div>
        </PorrtalShellDispatch.Provider>
      </PorrtalShellState.Provider>
    </KeycloakAuthentication>
  );
}

export default Index;
