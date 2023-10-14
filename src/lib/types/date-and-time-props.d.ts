import { FieldBaseProps, TextInputBaseProps } from '#/lib';
import { DateFieldState, DateSegment } from 'react-stately';
import { AriaDateFieldProps, AriaDatePickerProps, AriaTimeFieldProps } from 'react-aria';

export interface DateFieldProps extends FieldBaseProps, TextInputBaseProps, AriaDateFieldProps<T> {}

export interface DatePickerProps extends FieldBaseProps, TextInputBaseProps, AriaDatePickerProps<T> {
  direction?: 'top' | 'bottom';
}

export interface DateRangePickerProps {
  direction?: 'top' | 'bottom';
}

export interface TimeFieldProps extends FieldBaseProps, TextInputBaseProps, AriaTimeFieldProps<T> {}

export interface SegmentProps {
  segment: DateSegment;
  state: DateFieldState;
}
