import { FC } from 'react';
import { ComponentProps, UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import localesConfig from '@/i18n/locales.json';
import { ProjectMapClient, getNodeActiveCompositionEdition } from '@uniformdev/project-map';
import { cn } from '@/utils/styling';
import BaseText from '@/components/ui/Text';
import BaseButton, { ButtonVariant } from '@/components/ui/Button';

export type DynamicBreadcrumbParameters = {

};

const projectMap = new ProjectMapClient({
    apiHost: process.env.UNIFORM_CLI_BASE_URL! || 'https://uniform.app',
    apiKey: process.env.UNIFORM_API_KEY!,
    projectId: process.env.UNIFORM_PROJECT_ID!,
  });



type DynamicBreadcrumbProps = ComponentProps<DynamicBreadcrumbParameters>;
export const DynamicBreadcrumb: FC<DynamicBreadcrumbProps> = async ({ component, context }) => {
    const isLocalized = localesConfig?.locales?.length > 0;

    const { nodes } = await projectMap.getNodes({ 
        compositionId: context.composition._id,
        includeAncestors: true,
        //state: getState(preview),
      });

    if (!nodes) return [];

    console.log('nodes', nodes);

    nodes.shift();

    const cleanedNodes = nodes.flatMap(node => {
        if (!isLocalized || !node.path?.includes(':locale')) {
          const edition = getNodeActiveCompositionEdition({
            node,
            targetLocale: undefined,
          });
    
          return [
            {
              link: `${node.path?.replace(':locale', '').replace(node.pathSegment || '', node.data?.previewValue || '')}`,
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
    
          return {
            link: `${node.path?.replace(':locale', locale).replace(node.pathSegment || '', node.data?.previewValue || '')}`,
            title: node.name,
            //lastModified: edition?.modified,
            //changeFrequency: 'daily',
            //priority: 1,
          };
        });
      });

    console.log('cleanednodes', cleanedNodes);
    const size = "xs", color = "text-gray-500", font = "font-sans", transform = "", separator = ">";

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
                        <BaseText size={size} font={font} color={color} >
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





