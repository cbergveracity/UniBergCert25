'use client';
import { FC } from 'react';
import { RefinementList } from 'react-instantsearch';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
//import ErrorPropertyCallout from './ErrorPropertyCallout';
import { CanvasRefinementListParameters } from './CanvasRefinementListWrap';

const CanvasRefinementList = ({ refinementListParams }: ComponentProps<CanvasRefinementListParameters>) => {
  const { refinementListProps } = refinementListParams || {};

  if (!refinementListProps?.attribute) {
    //    return <ErrorPropertyCallout title="Property 'attribute' was not defined for RefinementList component." />;
    return <div>Setting error - attribute</div>;
  }

  const { allowedIndex, ...props } = refinementListProps;

  return (
    <div className="refinementList">
      <span>
        Search results are filtered by the following attribute: <code>{refinementListProps?.attribute}</code>
      </span>
      <RefinementList {...props} />
    </div>
  );
};

export default CanvasRefinementList;
