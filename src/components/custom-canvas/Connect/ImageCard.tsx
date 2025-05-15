import { FC } from 'react';
import Link from "next/link"
import {
  ComponentProps,
  UniformSlot
} from '@uniformdev/canvas-next-rsc/component';
import { Asset } from '@uniformdev/assets';
import { resolveAsset} from '@/utils/assets'
import Image from 'next/image';
import {DataWithProperties, LinkParamValue} from '@uniformdev/canvas';
import { formatUniformLink } from '@/utils/routing';



type ImageCardParameters = {
  title: string;
  url: LinkParamValue;
  image: Asset[];
};

enum ImageCardSlots {
    imageCardTop = 'imageCardTop',
    imageCardMiddle = 'imageCardMiddle',
    imageCardBottom = 'imageCardBottom',
}
type ImageCardProps = ComponentProps<ImageCardParameters, ImageCardSlots>;

export const ImageCardComponent: FC<ImageCardProps> = ({title, url, image, component, context, slots }) => {

  const [resolvedImage] = resolveAsset(image);

  return (
    <Link href={formatUniformLink(url)} className="block h-[35rem] cursor-pointer">
      <div className="flex flex-col overflow-hidden shadow-md border border-gray-200 h-full transition-shadow hover:shadow-lg">
        {/* Image section - fixed height of 20rem (320px) */}
        <div className="h-80 overflow-hidden">
          <Image
            src={resolvedImage?.url || ''}
            alt={title}
            width={400}
            height={320}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content section - also fixed height of 20rem (320px) */}
        <div className="flex flex-col justify-between p-6 h-60">
          <h3 className="text-xl font-semibold mb-4 line-clamp-3">{title}</h3>
          <span className="text-gray-500 mt-auto">
            <UniformSlot data={component} context={context} slot={slots.imageCardBottom} />
          </span>
        </div>
      </div>
    </Link>
  )
}

