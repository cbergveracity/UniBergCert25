'use client';
import { FC } from 'react';
import { Index } from 'react-instantsearch';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import ErrorPropertyCallout from './ErrorPropertyCallout';
import { GetDefaultIndexName } from '../../context/CanvasAlgoliaProvider';

type CanvasIndexParameters = {
  indexParams?: {
    indexProps?: {
      indexName?: string;
      indexId?: string;
    };
  };
};
enum CanvasIndexSlots {
  widgets = 'widgets',
}

type CanvasIndexProps = ComponentProps<CanvasIndexParameters, CanvasIndexSlots>;

const CanvasIndex: FC<CanvasIndexProps> = ({ component, context, slots, indexParams }) => {
  const { indexProps } = indexParams || {};
  const indexName = indexProps?.indexName || GetDefaultIndexName();

  if (!indexName) {
    return <ErrorPropertyCallout title="Property 'indexName' was not defined for Index component." />;
  }

  return (
    <div className="index">
      <Index {...indexProps} indexName={indexName}>
        <UniformSlot data={component} context={context} slot={slots.widgets} />
      </Index>
    </div>
  );
};

export default CanvasIndex;
