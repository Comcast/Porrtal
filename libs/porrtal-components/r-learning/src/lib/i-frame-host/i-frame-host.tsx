import { ViewComponentProps } from '@porrtal/r-api';
import styles from './i-frame-host.module.scss';

export function IFrameHost(props: ViewComponentProps) {
  const iframeUrl = props?.viewState?.state?.['iframeUrl'] as string ?? '';
  return (
    <iframe
      style={{ width: '100%', height: '100%' }}
      title="dashboard"
      src={iframeUrl}
    ></iframe>
  );
}

export default IFrameHost;
