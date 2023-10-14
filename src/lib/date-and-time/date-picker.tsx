import { forwardRef } from 'react';
import {
  Calendar,
  DateField,
  DatePickerProps,
  Dialog,
  Field,
  FieldButton,
  Popover,
  useFallbackProps,
  useFallbackRef,
} from '#/lib';
import { useDatePickerState } from 'react-stately';
import { mergeProps, useDatePicker } from 'react-aria';

function DatePicker(props: DatePickerProps, ref: any) {
  const { direction = 'bottom' } = props;
  const datePickerRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const state = useDatePickerState(fallbackProps);
  const { fieldProps, buttonProps, calendarProps, groupProps, dialogProps, ...otherProps } = useDatePicker(
    fallbackProps,
    state,
    datePickerRef
  );

  return (
    <Field {...mergeProps(props, otherProps)}>
      <div ref={datePickerRef} {...mergeProps(groupProps)}>
        <DateField {...fieldProps} />
        <FieldButton {...buttonProps}>C</FieldButton>
      </div>

      {state.isOpen && (
        <Popover state={state} triggerRef={datePickerRef} placement={`${direction} start`} hideArrow>
          <Dialog {...dialogProps}>
            <Calendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </Field>
  );
}

const _DatePicker = forwardRef(DatePicker);
export { _DatePicker as DatePicker };
