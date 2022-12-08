/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
import { LanguagePipe } from './language.pipe';

describe('LanguagePipe', () => {
  let pipe: LanguagePipe;

  beforeEach(() => {
    pipe = new LanguagePipe();
  });

  it('should replace value with empty string when null/undefined', () => {
    const markdowns: any[] = [null, undefined];
    const language = 'language';

    markdowns.forEach(markdown => {
      const result = pipe.transform(markdown, language);
      expect(result).toBe('```' + language + '\n\n```');
    });
  });

  it('should replace language with empty string when null/undefined', () => {
    const markdown = '# Markdown';
    const languages: any[] = [null, undefined];

    languages.forEach(language => {
      const result = pipe.transform(markdown, language);
      expect(result).toBe('```\n' + markdown + '\n```');
    });
  });

  it('should log error and return value when value is not a string', () => {
    const markdowns: any[] = [0, {}, [], /regex/];

    spyOn(console, 'error');

    markdowns.forEach(markdown => {
      const result = pipe.transform(markdown, markdown);

      expect(result).toBe(markdown);
      expect(console.error).toHaveBeenCalledWith(`LanguagePipe has been invoked with an invalid value type [${typeof markdown}]`);
    });
  });

  it('should log error and return value when parameter is not a string', () => {
    const markdown = '# Markdown';
    const languages: any[] = [0, {}, [], /regex/];

    spyOn(console, 'error');

    languages.forEach(language => {
      const result = pipe.transform(markdown, language);

      expect(result).toBe(markdown);
      expect(console.error).toHaveBeenCalledWith(`LanguagePipe has been invoked with an invalid parameter [${typeof language}]`);
    });
  });

  it('should append language to value', () => {
    const markdown = '# Markdown';
    const language = 'language';

    const result = pipe.transform(markdown, language);

    expect(result).toBe('```' + language + '\n' + markdown + '\n```');
  });
});
