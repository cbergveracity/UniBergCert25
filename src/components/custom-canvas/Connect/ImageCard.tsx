import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AssetParamValue } from '@uniformdev/assets';
import { DataWithProperties, LinkParamValue } from '@uniformdev/canvas';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { resolveAsset } from '@/utils/assets';
import { formatUniformLink } from '@/utils/routing';

type ImageCardParameters = {
  title: string;
  url: LinkParamValue;
  image: AssetParamValue;
};

enum ImageCardSlots {
  imageCardTop = 'imageCardTop',
  imageCardMiddle = 'imageCardMiddle',
  imageCardBottom = 'imageCardBottom',
}
type ImageCardProps = ComponentProps<ImageCardParameters, ImageCardSlots>;

export const ImageCardComponent: FC<ImageCardProps> = ({ title, url, image, component, context, slots }) => {
  const [resolvedImage] = resolveAsset(image);

  return (
    <Link href={formatUniformLink(url)} className="block h-[35rem] cursor-pointer">
      <div className="flex h-full flex-col overflow-hidden border border-gray-200 shadow-md transition-shadow hover:shadow-lg">
        {/* Image section - fixed height of 20rem (320px) */}
        <div className="h-80 overflow-hidden">
          <Image
            src={
              resolvedImage?.url ||
              'https://img.uniform.global/p/7gETXjLdSOWu4dGH1tMuhA/LtqkNh1NQhCjA6hdoU5cMw-340x180_newsthumb.png'
            }
            alt={title}
            width={400}
            height={320}
            className="size-full object-cover"
          />
        </div>

        {/* Content section - also fixed height of 20rem (320px) */}
        <div className="flex h-60 flex-col justify-between p-6">
          <h3 className="mb-4 line-clamp-3 text-xl font-semibold">{title}</h3>
          <span className="mt-auto text-gray-500">
            <UniformSlot data={component} context={context} slot={slots.imageCardBottom} />
          </span>
        </div>
      </div>
    </Link>
  );
};
