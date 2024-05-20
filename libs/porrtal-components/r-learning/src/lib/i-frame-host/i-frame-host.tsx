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
