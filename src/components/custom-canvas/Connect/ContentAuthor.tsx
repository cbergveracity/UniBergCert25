import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AssetParamValueItem } from '@uniformdev/assets';
import { ComponentProps, UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { resolveAsset } from '@/utils/assets';

export type ContentAuthorComponentParameters = {
  name: string;
  authorImage: AssetParamValueItem[];
  authorUrl?: string;
};

type ContentAuthorComponentProps = ComponentProps<ContentAuthorComponentParameters>;

export const ContentAuthorComponent: FC<ContentAuthorComponentProps> = ({
  name,
  authorImage,
  authorUrl,
  component,
  context,
  slots,
}) => {
  const [resolvedImage] = resolveAsset(authorImage);

  return (
    <Link
      href={authorUrl || '#'}
      className="group flex items-center rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <div className="relative mr-4 size-12 overflow-hidden rounded-full">
        <p>{resolvedImage?.url}</p>
        <Image
          src={resolvedImage?.url || ''}
          alt={'Photo of ' + (name || '')}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48px"
        />
      </div>
      <div>
        <h3 className="font-medium text-gray-900 group-hover:text-gray-700 dark:text-gray-100 dark:group-hover:text-gray-300">
          <UniformText placeholder="Author name goes here" parameterId="name" component={component} context={context} />
        </h3>
      </div>
    </Link>
  );
};

export default ContentAuthorComponent;
