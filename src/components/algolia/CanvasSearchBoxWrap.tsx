import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import CanvasSearchBox from './CanvasSearchBox';

type CanvasSearchBoxParameters = {
  searchBoxParams?: {
    searchBoxProps?: {
      placeholder?: string;
      searchAsYouType?: boolean;
    };
  };
};

const CanvasSearchBoxWrap = ({ searchBoxParams }: ComponentProps<CanvasSearchBoxParameters>) => {
  return <CanvasSearchBox searchBoxParams={searchBoxParams} />;
};

export default CanvasSearchBoxWrap;
