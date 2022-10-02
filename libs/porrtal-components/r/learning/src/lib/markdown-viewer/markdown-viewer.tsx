import { ViewComponentProps } from '@porrtal/r-api';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
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
        <ReactMarkdown children={contentFromUrl}></ReactMarkdown>
      </>
    )
  );
}

export default MarkdownViewer;
