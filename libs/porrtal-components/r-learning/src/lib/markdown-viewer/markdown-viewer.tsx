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
import { ViewComponentProps } from '@porrtal/r-api';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { uriTransformer } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './markdown-viewer.module.scss';

function isAbsolutePath(pathString: string): boolean {
  return /^(?:\/|[a-z]+:\/\/)/.test(pathString);
}

function getPathDirname(pathString: string): string {
  const lastSlashIndex = pathString.lastIndexOf('/');

  if (lastSlashIndex === -1) {
    return '';
  }

  return pathString.substr(0, lastSlashIndex);
}

export function MarkdownViewer(props: ViewComponentProps) {
  function transformLinkUri(uri: string): string {
    if (
      props?.viewState?.state &&
      props.viewState.state['contentUrl'] &&
      typeof props.viewState.state['contentUrl'] === 'string'
    ) {
      if (!isAbsolutePath(uri)) {
        const basePath = getPathDirname(props.viewState.state['contentUrl']);
        return uriTransformer(`${basePath}/${uri}`);
      }
    }

    return uriTransformer(uri);
  }

  const [contentFromUrl, setContentFromUrl] = useState('');
  useEffect(() => {
    if (
      props.viewState?.state &&
      props.viewState.state['contentUrl'] &&
      typeof props.viewState.state['contentUrl'] === 'string'
    ) {
      fetch(props.viewState.state['contentUrl'])
        .then((res) => res.text())
        .then((text) => setContentFromUrl(text));
    }
  }, [props.viewState]);

  return (
    <div className={styles['markdown-document']}>
      {props.viewState?.state && (
        <>
          <ReactMarkdown
            children={props.viewState.state['content'] as string}
            remarkPlugins={[remarkGfm]}
          ></ReactMarkdown>
          {props.viewState?.state['contentUrl'] &&
            (props.viewState?.state['contentUrl'] as string)
              .toLowerCase()
              .endsWith('.md') && (
              <ReactMarkdown
                children={contentFromUrl}
                remarkPlugins={[remarkGfm]}
                transformLinkUri={transformLinkUri}
                transformImageUri={transformLinkUri}
              ></ReactMarkdown>
            )}
          {props.viewState?.state['contentUrl'] &&
            (props.viewState?.state['contentUrl'] as string)
              .toLowerCase()
              .endsWith('.ts') && (
              <SyntaxHighlighter
                language="typescript"
                style={dark}
                children={contentFromUrl}
              ></SyntaxHighlighter>
            )}
          {props.viewState?.state['contentUrl'] &&
            (props.viewState?.state['contentUrl'] as string)
              .toLowerCase()
              .endsWith('.html') && (
              <SyntaxHighlighter
                language="cshtml"
                style={dark}
                children={contentFromUrl}
              ></SyntaxHighlighter>
            )}
          {props.viewState?.state['contentUrl'] &&
            (props.viewState?.state['contentUrl'] as string)
              .toLowerCase()
              .endsWith('.scss') && (
              <SyntaxHighlighter
                language="scss"
                style={dark}
                children={contentFromUrl}
              ></SyntaxHighlighter>
            )}
        </>
      )}
    </div>
  );
}

export default MarkdownViewer;
