import { replaceParameters } from './shell-utilities';

describe('Shell Utilities', () => {
  it('string with no parameters should strip out placeholders', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = {};
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this  a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm1}'
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a string parameter should get replaced', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = { parm1: 7.3 };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this 7.3 a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = ''
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a number parameter should get replaced', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = { parm1: 'is' };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = ''
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two instances of a parameter should get replaced', () => {
    const inputString = 'this {parm1} a test {parm1}';
    const inputParameters = { parm1: 'is' };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test is';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = ''
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two parameters (one missing) should get replaced', () => {
    const inputString = 'this {parm1} a test {parm2}';
    const inputParameters = { parm1: 'is' };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test ';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm2}'
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two parameters should get replaced', () => {
    const inputString = 'this {parm1} a test {parm2}';
    const inputParameters = { parm1: 'is', parm2: 'that is cool :)' };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test that is cool :)';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = ''
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two parameters (one with an object) should get replaced', () => {
    const inputString = 'this {parm1} a test {parm2.a}';
    const inputParameters = { parm1: 'is', parm2: { a: 'that is amazing !!'} };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this is a test that is amazing !!';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = ''
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a parameters expecting object but getting string should get replaced', () => {
    const inputString = 'this {parm1.a} a test';
    const inputParameters = { parm1: 'is'};
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this  a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm1.a}'
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with a parameters expecting string but getting object should get replaced', () => {
    const inputString = 'this {parm1} a test';
    const inputParameters = { parm1: { a: 'is'} };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this  a test';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm1}'
    expect(result.warning).toBe(expectedWarningString);
  });

  it('string with two missing parameters should get replaced', () => {
    const inputString = 'this {parm1} a test {parm2}';
    const inputParameters = { };
    const result = replaceParameters(inputString, inputParameters);
    const expectedOutputString = 'this  a test ';
    expect(result.replaced).toBe(expectedOutputString);

    const expectedWarningString = 'Parameter match failed for {parm1}, {parm2}'
    expect(result.warning).toBe(expectedWarningString);
  });

});
