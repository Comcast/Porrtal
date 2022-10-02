import styles from './markdown-viewer.module.scss';

/* eslint-disable-next-line */
export interface MarkdownViewerProps {}

export function MarkdownViewer(props: MarkdownViewerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MarkdownViewer!</h1>
    </div>
  );
}

export default MarkdownViewer;
