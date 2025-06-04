'use client';
import { RefinementList } from 'react-instantsearch';
// Import the specific type for the parameter value
import { CanvasRefinementListParameters } from './CanvasRefinementListWrap';

// The component now expects a prop `refinementListParams` of type `RefinementListParameterValue | undefined`
const CanvasRefinementList = ({ refinementListParams }: { refinementListParams?: CanvasRefinementListParameters }) => {
  // refinementListParams is the direct object, e.g., { refinementListProps: { attribute: 'brand', ... } } or undefined.
  const actualAlgoliaProps = refinementListParams?.refinementListProps;
  if (!actualAlgoliaProps?.attribute) {
    //    return <ErrorPropertyCallout title="Property 'attribute' was not defined for RefinementList component." />;
    return <div>Setting error - attribute</div>;
  }

  // Destructure allowedIndex and the rest of the props for Algolia's RefinementList
  const { allowedIndex, ...propsForAlgoliaWidget } = actualAlgoliaProps;

  return (
    <div className="refinementList">
      <span>
        Search results are filtered by the following attribute: <code>{actualAlgoliaProps?.attribute}</code>
      </span>
      <RefinementList {...propsForAlgoliaWidget} />
    </div>
  );
};

export default CanvasRefinementList;
