import { ViewComponentProps } from '@porrtal/r-api';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './markdown-viewer.module.scss';

export function MarkdownViewer(props: ViewComponentProps) {
  const [contentFromUrl, setContentFromUrl] = useState('');
  useEffect(() => {
    if (props.viewState?.state && props.viewState.state['contentUrl']) {
      fetch(props.viewState.state['contentUrl'] as string)
        .then((res) => res.text())
        .then((text) => setContentFromUrl(text));
    }
  }, [props.viewState]);

  return (
    props.viewState?.state && (
      <>
        <ReactMarkdown
          children={props.viewState.state['content'] as string}
        ></ReactMarkdown>
        {props.viewState?.state['contentUrl'] &&
          (props.viewState?.state['contentUrl'] as string)
            .toLowerCase()
            .endsWith('.md') && (
            <ReactMarkdown children={contentFromUrl}></ReactMarkdown>
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
