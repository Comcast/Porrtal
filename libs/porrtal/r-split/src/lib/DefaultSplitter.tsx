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
import * as React from 'react';
import { RenderSplitterProps } from './RenderSplitterProps';
import styles from './defaultSplitter.module.scss';

const getThinLineSize = (size: number) => `${size % 2 === 0 ? 2 : 3}px`;
const getCenteredMargin = (size: number) =>
  `${Math.max(0, Math.floor(size / 2) - 1)}px`;

type Props = RenderSplitterProps & {
  color?: string;
  hoverColor?: string;
  dragColor?: string;
};

/**
 * The default splitter which provides a thin line within a larger mouse hit area.
 */
export const DefaultSplitter = (props: Props) => {
  const {
    dragging,
    pixelSize,
    color = 'silver',
    hoverColor = 'gray',
    dragColor = 'black',
  } = props;

  const cssProperties = {
    '--default-splitter-line-margin': getCenteredMargin(pixelSize),
    '--default-splitter-line-size': getThinLineSize(pixelSize),
    '--default-splitter-line-color': dragging ? dragColor : color,
    '--default-splitter-line-hover-color': dragging ? dragColor : hoverColor,
  } as React.CSSProperties;

  return (
    <div className={styles['default-splitter']} style={cssProperties}>
      <div className={styles['line']} />
    </div>
  );
};
