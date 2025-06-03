import { FC } from 'react';
import Link from "next/link"
import {
  ComponentProps,
  UniformSlot
} from '@uniformdev/canvas-next-rsc/component';
import { AssetParamValue } from '@uniformdev/assets';
import { resolveAsset} from '@/utils/assets'
import Image from 'next/image';
import {DataWithProperties, LinkParamValue} from '@uniformdev/canvas';
import { formatUniformLink } from '@/utils/routing';

type ShadowCardParameters = {
    title: string;
    url: LinkParamValue;
    image: AssetParamValue;
  };
  type ShadowCardProps = ComponentProps<ShadowCardParameters>;
  