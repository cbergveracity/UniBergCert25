import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import CanvasRefinementList from './CanvasRefinementList';

export type CanvasRefinementListProps = {
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

// Type for the value of the 'refinementListParams' field from Uniform
export type CanvasRefinementListParameters = {
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

// Type for the parameters object that Uniform will provide to this server component wrapper.
// This is 'P' in ComponentProps<P>.
export type CanvasRefinementListUniformParameters = {
  refinementListParams?: CanvasRefinementListParameters;
};

const CanvasRefinementListWrap = (props: ComponentProps<CanvasRefinementListUniformParameters>) => {
  // Pass only the specific parameter object to the client component
  return <CanvasRefinementList refinementListParams={props.refinementListParams} />;
};

export default CanvasRefinementListWrap;
