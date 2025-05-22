import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import CanvasSearchBoxWrap from './CanvasSearchBoxWrap';

type CanvasSearchBoxParameters = {
  searchBoxParams?: {
    searchBoxProps?: {
      placeholder?: string;
      searchAsYouType?: boolean;
    };
  };
};

const CanvasSearchBox = ({ searchBoxParams }: ComponentProps<CanvasSearchBoxParameters>) => {
  return <CanvasSearchBoxWrap searchBoxParams={searchBoxParams} />;
};

export default CanvasSearchBox;
