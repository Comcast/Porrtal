import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

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
    return (
      <>
        <Head>
          <title>@porrtal - first page</title>
        </Head>

        <ShellState views={getQuickStartViews(reactUiLibrary)}>
          <ShellBlueprint bannerData={quickStartBannerData} />
        </ShellState>
      </>
    );
  }

  return <div>loading...</div>;
}

export default QuickStart;
