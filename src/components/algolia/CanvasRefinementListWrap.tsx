import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import CanvasRefinementList from './CanvasRefinementList';

export type CanvasRefinementListParameters = {
  refinementListParams?: {
    refinementListProps?: {
      allowedIndex?: string;
      attribute: string;
      operator: 'and' | 'or';
      limit?: number;
      showMore?: boolean;
      showMoreLimit?: number;
      searchable?: boolean;
      searchablePlaceholder?: string;
      escapeFacetValues?: boolean;
    };
  };
};

const CanvasRefinementListWrap = (refinementListParams : ComponentProps<CanvasRefinementListParameters>) => {
  //const { refinementListProps } = refinementListParams || {};
  return (
    <div>Testing 1234
      <CanvasRefinementList {...refinementListParams} />
    </div>
  ); 
};

export default CanvasRefinementListWrap;
