import { forwardRef } from 'react';
import { Field, RangeCalendarProps, useFallbackProps, useFallbackRef } from '#/lib';
import { useLocale, useRangeCalendar } from 'react-aria';
import { useRangeCalendarState } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import styles from '#/lib/calendar/calendar.module.css';
import { CalendarHeader } from '#/lib/calendar/calendar-header';
import { CalendarGrid } from '#/lib/calendar/calendar-grid';

function RangeCalendar(props: RangeCalendarProps, ref: any) {
  const rangeCalendarRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...fallbackProps,
    locale,
    createCalendar,
  });
  const { calendarProps, prevButtonProps, nextButtonProps, errorMessageProps } = useRangeCalendar(
    fallbackProps,
    state,
    rangeCalendarRef
  );

  return (
    <Field {...props} errorMessageProps={errorMessageProps}>
      <div ref={rangeCalendarRef} {...calendarProps} className={styles.base}>
        <CalendarHeader
          state={state}
          calendarProps={calendarProps}
          prevButtonProps={prevButtonProps}
          nextButtonProps={nextButtonProps}
        />
        <CalendarGrid state={state} />
      </div>
    </Field>
  );
}

const _RangeCalendar = forwardRef(RangeCalendar);
export { _RangeCalendar as RangeCalendar };
