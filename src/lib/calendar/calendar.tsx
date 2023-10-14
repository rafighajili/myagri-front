import { forwardRef } from 'react';
import { CalendarProps, Field, useFallbackProps, useFallbackRef } from '#/lib';
import { useCalendar, useLocale } from 'react-aria';
import { useCalendarState } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import { CalendarGrid } from './calendar-grid';
import { CalendarHeader } from './calendar-header';
import styles from './calendar.module.css';

function Calendar(props: CalendarProps, ref: any) {
  const calendarRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { locale } = useLocale();
  const state = useCalendarState({
    ...fallbackProps,
    locale,
    createCalendar,
  });
  const { calendarProps, prevButtonProps, nextButtonProps, errorMessageProps } = useCalendar(fallbackProps, state);

  return (
    <Field {...props} errorMessageProps={errorMessageProps}>
      <div ref={calendarRef} {...calendarProps} className={styles.base}>
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

const _Calendar = forwardRef(Calendar);
export { _Calendar as Calendar };
