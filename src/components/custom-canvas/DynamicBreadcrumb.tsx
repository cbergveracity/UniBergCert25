import { FC } from 'react';
import { DefaultTheme } from 'tailwindcss/types/generated/default-theme';
import { ComponentProps, UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { ProjectMapClient, getNodeActiveCompositionEdition } from '@uniformdev/project-map';
import BaseButton, { ButtonVariant } from '@/components/ui/Button';
import BaseText from '@/components/ui/Text';
import localesConfig from '@/i18n/locales.json';
import { ViewPort } from '@/types/cskTypes';
import { cn } from '@/utils/styling';

type TextSize = keyof DefaultTheme['fontSize'];

export type DynamicBreadcrumbParameters = {
  separator?: string;
  size?: TextSize | ViewPort<TextSize>;
  color?: string;
  font?: string;
  transform?: string;
};

const projectMap = new ProjectMapClient({
  apiHost: process.env.UNIFORM_CLI_BASE_URL! || 'https://uniform.app',
  apiKey: process.env.UNIFORM_API_KEY!,
  projectId: process.env.UNIFORM_PROJECT_ID!,
});

type DynamicBreadcrumbProps = ComponentProps<DynamicBreadcrumbParameters>;
export const DynamicBreadcrumb: FC<DynamicBreadcrumbProps> = async ({
  separator,
  size,
  color,
  font,
  transform,
  component,
  context,
}) => {
  const isLocalized = localesConfig?.locales?.length > 0;

  const { nodes } = await projectMap.getNodes({
    compositionId: context.composition._id,
    includeAncestors: true,
    //state: getState(preview),
  });

  if (!nodes) return [];

  nodes.shift();

  if (nodes.length === 1) {
    //don't display breadcrumb on home page
    return <span className="NoBreadcrumb"></span>;
  }

  const cleanedNodes = nodes.flatMap(node => {
    if (!isLocalized || !node.path?.includes(':locale')) {
      const edition = getNodeActiveCompositionEdition({
        node,
        targetLocale: undefined,
      });

      let resultingLink = node.path?.replace(':locale', '');
      if (node.pathSegment?.startsWith(':')) {
        resultingLink = resultingLink.replace(node.pathSegment, node.data?.previewValue || '');
      }

      return [
        {
          link: `${resultingLink}`,
          title: node.name || '',
          //lastModified: edition?.modified,
          //changeFrequency: 'daily',
          //priority: 1,
        },
      ];
    }

    return localesConfig.locales.map(locale => {
      const edition = getNodeActiveCompositionEdition({
        node,
        targetLocale: locale,
      });

      let resultingLink = node.path?.replace(':locale', locale);
      if (node.pathSegment?.startsWith(':')) {
        resultingLink = resultingLink.replace(node.pathSegment, node.data?.previewValue || '');
      }

      return {
        link: `${resultingLink}`,
        title: node.name,
        //lastModified: edition?.modified,
        //changeFrequency: 'daily',
        //priority: 1,
      };
    });
  });

  //const size = "xs", color = "text-gray-500", font = "font-sans", transform = "", separator = ">";

  return (
    <ul
      className={cn('flex items-center', {
        [`text-${size}`]: !!size,
        [`text-${color}`]: !!color,
      })}
    >
      {cleanedNodes.map(({ link, title }, index) => (
        <li className="flex items-center" key={`${title}-${index}`}>
          {!!index && <div className="mx-2">{separator}</div>}
          {!link ? (
            <BaseText size={size} font={font} color={color}>
              {title}
            </BaseText>
          ) : (
            <BaseButton
              variant={ButtonVariant.Link}
              textColor={color}
              className={cn({
                [`font-${font}`]: !!font,
                [`text-${size}`]: !!size,
                [transform || '']: !!transform,
              })}
              href={link}
            >
              {title}
            </BaseButton>
          )}
        </li>
      ))}
    </ul>
  );
};
