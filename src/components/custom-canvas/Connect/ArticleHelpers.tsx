import { FC } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { formatTime, renderNumberList } from '../../canvas/Countdown/utils';
import { MILLISECONDS_IN_SECOND, SECONDS_IN_DAY } from '../../canvas/Countdown/constants';
import { UniformDate} from '../fieldDefinitions'

export type ArticleAgeComponentParameters = {
    publishDate: UniformDate
};

type ContentAuthorComponentProps = ComponentProps<ArticleAgeComponentParameters>;

export const ArticleAgeComponent: FC<ContentAuthorComponentProps> = ({ publishDate, component }) => {
  const publishDateValue = new Date(publishDate?.datetime ?? 0).getTime();
  const now = new Date().getTime();
  const timeDifference = Math.floor((publishDateValue - now) / MILLISECONDS_IN_SECOND);
  const days = Math.floor(timeDifference / SECONDS_IN_DAY);

  return (
      <span>Published {Math.abs(days)} days ago</span>
  );
};
