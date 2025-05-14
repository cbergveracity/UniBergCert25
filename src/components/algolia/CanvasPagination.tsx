'use client';
import { FC } from 'react';
import { Configure, Pagination } from 'react-instantsearch';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

type CanvasPaginationParameters = {
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

const CanvasPagination = ({ paginationParams, pageSize }: ComponentProps<CanvasPaginationParameters>) => {
  const { paginationProps } = paginationParams || {};
  return (
    <>
      <Configure hitsPerPage={pageSize} />
      <div className="pagination">
        <Pagination {...paginationProps} />
      </div>
    </>
  );
};

export default CanvasPagination;
