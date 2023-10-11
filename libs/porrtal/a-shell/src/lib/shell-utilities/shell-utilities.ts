/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
                if (Array.isArray(innerValue)) {
                  retString = innerValue.join(',');
                  return true;
                } else {
                  innerObject = innerValue;
                  return false;
                }
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
