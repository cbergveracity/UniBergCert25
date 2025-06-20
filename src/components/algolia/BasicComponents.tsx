'use client';
import { Configure, Pagination, RefinementList, SearchBox } from 'react-instantsearch';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import ErrorPropertyCallout from './ErrorPropertyCallout';
import { renderHits } from './Hit';

type CanvasBasicComponentsParameters = {
  searchBoxParams?: {
    searchBoxProps?: {
      placeholder?: string;
      searchAsYouType?: boolean;
    };
  };
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
  paginationParams?: {
    paginationProps?: {
      totalPages?: number;
      padding?: number;
      showFirst?: boolean;
      showPrevious?: boolean;
      showNext?: boolean;
      showLast?: boolean;
    };
  };
  pageSize?: number;
};

const CanvasBasicComponents = (componentProps: ComponentProps<CanvasBasicComponentsParameters>) => {
  const { component, searchBoxParams, refinementListParams, paginationParams, pageSize } = componentProps || {};
  const refinementListProps = refinementListParams?.refinementListProps;

  if (!refinementListProps?.attribute) {
    return (
      <ErrorPropertyCallout title="Property 'attribute' was not defined for RefinementList parameter in BasicComponents component." />
    );
  }

  const { allowedIndex, ...pureRefinementListProps } = refinementListProps;

  return (
    <>
      <Configure hitsPerPage={pageSize} />
      <div className="searchBox">
        <SearchBox {...searchBoxParams?.searchBoxProps} />
      </div>
      <div className="refinementList">
        <span>{refinementListProps.attribute}</span>
        <RefinementList {...pureRefinementListProps} />
      </div>
      <div className="hits">{renderHits(component)}</div>
      <div className="pagination">
        <Pagination {...paginationParams?.paginationProps} />
      </div>
    </>
  );
};

export default CanvasBasicComponents;
