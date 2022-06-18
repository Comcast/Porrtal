import { ShellState } from '@porrtal/shell';
import { ShellMaterial } from '@porrtal/shell-material';
import { KeycloakAuthentication } from '@porrtal/user';
import { testComponents, testViews } from '../test-view-states';

export function Index() {
  return (
    <KeycloakAuthentication
      uri="http://localhost:8080"
      realm="porrtal"
      clientId="porrtal-app"
      redirectUri="http://localhost:4200/second-page"
    >
      <ShellState components={testComponents} views={testViews}>
        <ShellMaterial></ShellMaterial>
      </ShellState>
    </KeycloakAuthentication>
  );
}

export default Index;
