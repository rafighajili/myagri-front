import { forwardRef } from 'react';
import { DateFieldProps, Field, TextInput, useFallbackProps, useFallbackRef } from '#/lib';
import { createCalendar } from '@internationalized/date';
import { mergeProps, useDateField, useLocale } from 'react-aria';
import { useDateFieldState } from 'react-stately';
import { Segment } from '#/lib/date-and-time/segment';

function DateField(props: DateFieldProps, ref: any) {
  const fieldRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { locale } = useLocale();
  const state = useDateFieldState({ ...fallbackProps, locale, createCalendar });
  const { fieldProps, ...otherProps } = useDateField(fallbackProps, state, fieldRef);

  return (
    <Field {...mergeProps(fallbackProps, otherProps)}>
      <TextInput
        ref={fieldRef}
        fieldProps={fieldProps}
        {...fallbackProps}
        fieldChildren={state.segments.map((segment, i) => (
          <Segment key={i} segment={segment} state={state} />
        ))}
      />
    </Field>
  );
}

const _DateField = forwardRef(DateField);
export { _DateField as DateField };
