import format from 'date-fns/format';
import { ISODatePart } from 'type';

export const formatISODatePart = (isoDatePart: ISODatePart): string => {
  return format(new Date(isoDatePart), 'y년 M월 d일');
};
