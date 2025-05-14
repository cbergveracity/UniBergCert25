import createComponentResolver, { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';
import { cskComponentsMapping } from '@/components/canvas';
import { customComponentsMapping } from '@/components/custom-canvas';
import { algoliaComponentsMapping } from './algolia/Index';
//import { algoliaComponentsMapping } from '@/components/algolia';

const componentsMapping: ComponentMapping = {
  ...cskComponentsMapping,
  ...customComponentsMapping,
  ...algoliaComponentsMapping,
};

export const componentResolver = createComponentResolver(componentsMapping);
