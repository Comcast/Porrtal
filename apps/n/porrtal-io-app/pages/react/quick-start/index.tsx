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
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { ShellMaterial } from '@porrtal/r-shell-material';

import { ShellState } from '@porrtal/r-shell';

import { ShellBlueprint } from '@porrtal/r-shell-blueprint';
import { useEffect, useState } from 'react';
import Head from 'next/head';

import { getBannerData, getReactUiLibrary } from '../../../page-data/data';
import { getQuickStartViews } from '../../../page-data/quick-start-views';

/* eslint-disable-next-line */
export interface QuickStartProps {}

export function QuickStart(props: QuickStartProps) {
  const [isSSR, setIsSSR] = useState(true);

  const reactUiLibrary = isSSR ? '' : getReactUiLibrary();

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const quickStartBannerData = {
    ...getBannerData(),
    displayText: `quick-start ${reactUiLibrary ? '(' : ''}${reactUiLibrary}${
      reactUiLibrary ? ')' : ''
    }`,
    displayImage: '/assets/react.svg',
  };

  if (!isSSR) {
    if (reactUiLibrary === 'blueprint') {
      return (
        <>
          <Head>
            <title>@porrtal quick start (blueprint)</title>
          </Head>

          <ShellState views={getQuickStartViews(reactUiLibrary)}>
            <ShellBlueprint bannerData={quickStartBannerData} />
          </ShellState>
        </>
      );
    } else {
      return (
        <>
          <Head>
            <title>@porrtal quick start (material)</title>
          </Head>

          <ShellState views={getQuickStartViews(reactUiLibrary)}>
            <ShellMaterial bannerData={quickStartBannerData} />
          </ShellState>
        </>
      );
    }
  }

  return <div>loading...</div>;
}

export default QuickStart;
