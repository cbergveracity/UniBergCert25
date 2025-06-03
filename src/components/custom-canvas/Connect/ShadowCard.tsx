import { FC } from 'react';
import Link from 'next/link';
import { AssetParamValue } from '@uniformdev/assets';
import { LinkParamValue } from '@uniformdev/canvas';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

type ShadowCardParameters = {
  title: string;
  url: LinkParamValue;
  image: AssetParamValue;
};
type ShadowCardProps = ComponentProps<ShadowCardParameters>;
