import { StateObject } from '@porrtal/a-api';

export function replaceParameters(
  source: string,
  parameters: StateObject
): { replaced: string; warning: string } {
  const regex = /{([\w.]+)}/g;
  let warningString = '';
  const returnString = source.replace(regex, (substr: string, p1: string) => {
    let retString = '';
    if (p1) {
      const p1NoSpaces = p1.replace(' ', '');
      if (p1NoSpaces) {
        const p1Array = p1.split('.');
        let innerObject = parameters;
        p1Array.some((element, index) => {
          const innerValue = innerObject?.[element];
          switch (typeof innerValue) {
            case 'string':
              if (index + 1 === p1Array.length) {
                retString = innerValue;
              } else {
                warningString = addWarningForFailedParameter(
                  warningString,
                  substr
                );
              }
              return true;

            case 'number':
            case 'bigint':
            case 'boolean':
              if (index + 1 === p1Array.length) {
                retString = innerValue.toString();
              } else {
                warningString = addWarningForFailedParameter(
                  warningString,
                  substr
                );
              }
              return true;

            case 'object':
              if (index + 1 !== p1Array.length) {
                innerObject = innerValue;
                return false;
              }
              warningString = addWarningForFailedParameter(
                warningString,
                substr
              );
              return true;

            default:
              warningString = addWarningForFailedParameter(
                warningString,
                substr
              );
              return true;
          }
        });
      }
    } else {
      warningString = addWarningForFailedParameter(warningString, substr);
    }
    return retString;
  });
  return { replaced: returnString, warning: warningString };
}

function addWarningForFailedParameter(warningString: string, substr: string) {
  if (warningString) {
    warningString += `, ${substr}`;
  } else {
    warningString = `Parameter match failed for ${substr}`;
  }
  return warningString;
}
