import '@blueprintjs/core/lib/css/blueprint.css';
import { ShellState } from '@porrtal/shell';
import { KeycloakAuthentication } from '@porrtal/user';
import { testComponents, testViews } from '../test-view-states';
import { ShellBlueprint } from '@porrtal/shell-blueprint';


/* eslint-disable-next-line */
export interface ThirdPageProps {}

export function ThirdPage(props: ThirdPageProps) {
  return (
    <KeycloakAuthentication
      uri="http://localhost:8080"
      realm="porrtal"
      clientId="porrtal-app"
      redirectUri="http://localhost:4200/second-page"
    >
      <ShellState components={testComponents} views={testViews}>
        <ShellBlueprint />
      </ShellState>
    </KeycloakAuthentication>
  );
}

export default ThirdPage;
