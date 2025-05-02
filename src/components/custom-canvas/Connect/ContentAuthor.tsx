import { FC } from 'react';
import { ComponentProps, UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import Link from 'next/link';
import Image from 'next/image';
import { Asset } from '@uniformdev/assets';
import { resolveAsset} from '@/utils/assets'
import { flattenValues } from '@uniformdev/canvas';


export type ContentAuthorComponentParameters = {
    name: string,
    authorImage: Asset[],
    authorUrl?: string
};


type ContentAuthorComponentProps = ComponentProps<ContentAuthorComponentParameters>;

export const ContentAuthorComponent: FC<ContentAuthorComponentProps> = ({name, authorImage, authorUrl, component, context, slots }) => {
  const [resolvedImage] = resolveAsset(authorImage);
  

  return (
    <Link href={authorUrl || '#'} className="flex items-center p-4 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 group">
      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
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
        <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300">
        <UniformText
            placeholder="Author name goes here"
            parameterId="name"
            component={component}
            context={context}
          />
        </h3>
      </div>
    </Link>
  );
};

export default ContentAuthorComponent;