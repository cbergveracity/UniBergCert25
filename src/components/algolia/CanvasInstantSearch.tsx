'use client';
import { FC } from 'react';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import CanvasAlgoliaProvider from '../../context/CanvasAlgoliaProvider';
import ErrorPropertyCallout from './ErrorPropertyCallout';
import { liteClient as algoliaSearch } from 'algoliasearch/lite';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
// const {
//   publicRuntimeConfig: { applicationId, algoliaApiKey},
// } = getConfig();

//const searchClient = algoliasearch(applicationId, algoliaApiKey);
// const searchClient = liteClient(
//   process.env.ALGOLIA_APPLICATION_ID || '', 
//   process.env.ALGOLIA_API_KEY || '',
// );
const searchClient = algoliaSearch('CSCX3S80OA','20008aea4fab42243989dea540bfa70e');

type CanvasInstantSearchParameters = {
  title?: string;
  instantSearchParams?: {
    instantSearchProps?: {
      indexName?: string;
      stalledSearchDelay?: number;
    };
  };
};
enum CanvasInstantSearchSlots {
  widgets = 'widgets',
}

type CanvasInstantSearchProps = ComponentProps<CanvasInstantSearchParameters, CanvasInstantSearchSlots>;

const CanvasInstantSearch: FC<CanvasInstantSearchProps> = ({ component, context, slots, instantSearchParams, title }) => {
  const { instantSearchProps } = instantSearchParams || {};

  if (!instantSearchProps?.indexName) {
    return <ErrorPropertyCallout title="Property 'indexName' was not defined for InstantSearch component." />;
  }

  return (
      <CanvasAlgoliaProvider defaultIndexName={instantSearchProps.indexName}>
        {Boolean(title) && <h2>{title}</h2>}
        <InstantSearchNext {...instantSearchProps} indexName={instantSearchProps.indexName} searchClient={searchClient}>
          <UniformSlot data={component} context={context} slot={slots.widgets}/>
        </InstantSearchNext>
      </CanvasAlgoliaProvider>
  );
};

export default CanvasInstantSearch;
