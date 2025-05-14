'use client';
import { FC } from 'react';
import { SearchBox } from 'react-instantsearch';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

type CanvasSearchBoxParameters = {
  searchBoxParams?: {
    searchBoxProps?: {
      placeholder?: string;
      searchAsYouType?: boolean;
    };
  };
};

const CanvasSearchBox = ({ searchBoxParams }: ComponentProps<CanvasSearchBoxParameters>) => {
  const { searchBoxProps } = searchBoxParams || {};
  return (
    <div className="searchBox">
      <SearchBox {...searchBoxProps} />
    </div>
  );
};

export default CanvasSearchBox;
