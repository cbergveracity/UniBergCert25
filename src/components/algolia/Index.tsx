
import BasicComponents from './BasicComponents';
import CanvasHits from './CanvasHits';
import CanvasIndex from './CanvasIndex';
import CanvasInstantSearch from './CanvasInstantSearch';
import CanvasPagination from './CanvasPagination';
import CanvasRefinementListWrap from './CanvasRefinementListWrap';
import CanvasSearchBoxWrap from './CanvasSearchBoxWrap';
import { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';

export const algoliaComponentsMapping: ComponentMapping = {
  'algolia-basicComponents': { component: BasicComponents }, 
  'algolia-hits': { component: CanvasHits },
  'algolia-index': { component: CanvasIndex },
  'algolia-instantSearch': { component: CanvasInstantSearch },
  'algolia-pagination': { component: CanvasPagination },
  'algolia-refinementList': { component: CanvasRefinementListWrap },
  'algolia-searchBox': { component: CanvasSearchBoxWrap },
};

// registerUniformComponent({
//   type: 'algolia-basicComponents',
//   component: BasicComponents,
// });

// registerUniformComponent({
//   type: 'algolia-hits',
//   component: CanvasHits,
// });

// registerUniformComponent({
//   type: 'algolia-index',
//   component: CanvasIndex,
// });

// registerUniformComponent({
//   type: 'algolia-instantSearch',
//   component: CanvasInstantSearch,
// });

// registerUniformComponent({
//   type: 'algolia-pagination',
//   component: CanvasPagination,
// });

// registerUniformComponent({
//   type: 'algolia-refinementList',
//   component: CanvasRefinementList,
// });

// registerUniformComponent({
//   type: 'algolia-searchBox',
//   component: CanvasSearchBox,
// });
