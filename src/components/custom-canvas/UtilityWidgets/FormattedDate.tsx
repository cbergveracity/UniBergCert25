import { FC } from 'react';
import { format } from 'date-fns';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { UniformDate } from '../fieldDefinitions';

type FormattedDateParameters = {
  date: UniformDate;
  formatString: string;
  customFormat: string;
};

type FormattedDateComponentProps = ComponentProps<FormattedDateParameters>;

export const FormattedDateComponent: FC<FormattedDateComponentProps> = ({
  date,
  formatString,
  customFormat,
  context,
  component,
}) => {
  const dateValue = new Date(date?.datetime ?? 0).getTime();
  const formattedDate = formatString === 'custom' ? format(dateValue, customFormat) : format(dateValue, formatString);

  return <span>{formattedDate}</span>;
};
