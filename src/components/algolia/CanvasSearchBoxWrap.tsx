'use client';
import { SearchBox } from 'react-instantsearch';

type CanvasSearchBoxParameters = {
  searchBoxParams?: {
    searchBoxProps?: {
      placeholder?: string;
      searchAsYouType?: boolean;
    };
  };
};

const CanvasSearchBoxWrap = ({ searchBoxParams }: CanvasSearchBoxParameters) => {
  const { searchBoxProps } = searchBoxParams || {};
  return (
    <div className="searchBox">
      <SearchBox {...searchBoxProps} />
    </div>
  );
};

export default CanvasSearchBoxWrap;
