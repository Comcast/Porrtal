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
      if (!isAbsolutePath(props.viewState.state['contentUrl'])) {
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
    props.viewState?.state && (
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
    )
  );
}

export default MarkdownViewer;
