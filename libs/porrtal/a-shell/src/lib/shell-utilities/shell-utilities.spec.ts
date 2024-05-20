/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { replaceParameters } from './shell-utilities';

describe('Shell Utilities', () => {
  it('string with no parameters should strip out placeholders', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = {};
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this  a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm1}';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a number parameter should get replaced', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = { parm1: 7.3 };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this 7.3 a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = '';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a string parameter should get replaced', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = { parm1: 'is' };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = '';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a bigint parameter should get replaced', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = { parm1: BigInt(7) };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this 7 a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = '';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a boolean parameter should get replaced', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = { parm1: true };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this true a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = '';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a date parameter should get replaced', () => {
    const inputString = 'this {parm1} a test';
    const theDate = Date();
    const inputParameters = { parm1: theDate };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = `this ${theDate} a test`;
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = '';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two instances of a parameter should get replaced', () => {
    const inputString = 'this {parm1} a test {parm1}';
    const inputParameters = { parm1: 'is' };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test is';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = '';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two parameters (one missing) should get replaced', () => {
    const inputString = 'this {parm1} a test {parm2}';
    const inputParameters = { parm1: 'is' };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test ';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm2}';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two parameters should get replaced', () => {
    const inputString = 'this {parm1} a test {parm2}';
    const inputParameters = { parm1: 'is', parm2: 'that is cool :)' };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test that is cool :)';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = '';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two parameters (one with an object) should get replaced', () => {
    const inputString = 'this {parm1} a test {parm2.a}';
    const inputParameters = { parm1: 'is', parm2: { a: 'that is amazing !!' } };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test that is amazing !!';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = '';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a parameters expecting object but getting string should get replaced', () => {
    const inputString = 'this {parm1.a} a test';
    const inputParameters = { parm1: 'is' };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this  a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm1.a}';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a parameters expecting string but getting object should get replaced', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = { parm1: { a: 'is' } };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this  a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm1}';
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two missing parameters should get replaced', () => {
    const inputString = 'this {parm1} a test {parm2}';
    const inputParameters = {};
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this  a test ';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm1}, {parm2}';
    expect(result.warning).toBe(expectedWarningString);
  });
});
