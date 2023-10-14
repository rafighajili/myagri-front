import {
  AriaCalendarCellProps,
  AriaCalendarGridProps,
  AriaCalendarProps,
  AriaRangeCalendarProps,
  CalendarAria,
} from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { FieldBaseProps } from '#/lib';
import { CalendarDate } from '@internationalized/date';

interface GeneralCalendarState {
  state: CalendarState | RangeCalendarState;
}

export interface CalendarProps extends AriaCalendarProps<T>, FieldBaseProps {}

export interface RangeCalendarProps extends AriaRangeCalendarProps<T>, FieldBaseProps {}

export interface CalendarHeaderProps
  extends Pick<CalendarAria, 'calendarProps' | 'prevButtonProps' | 'nextButtonProps'>,
    GeneralCalendarState {}

export interface CalendarGridProps extends AriaCalendarGridProps, GeneralCalendarState {}

export interface CalendarCellProps extends AriaCalendarCellProps, GeneralCalendarState {
  currentMonth: CalendarDate;
}
