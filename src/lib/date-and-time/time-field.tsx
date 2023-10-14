import { forwardRef } from 'react';
import { Field, TextInput, TimeFieldProps, useFallbackProps, useFallbackRef } from '#/lib';
import { mergeProps, useLocale, useTimeField } from 'react-aria';
import { useTimeFieldState } from 'react-stately';
import { Segment } from '#/lib/date-and-time/segment';

function TimeField(props: TimeFieldProps, ref: any) {
  const inputRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { locale } = useLocale();
  const state = useTimeFieldState({ ...fallbackProps, locale });
  const { fieldProps, ...otherProps } = useTimeField(fallbackProps, state, inputRef);

  return (
    <Field {...mergeProps(fallbackProps, otherProps)}>
      <TextInput
        ref={inputRef}
        fieldProps={fieldProps}
        {...fallbackProps}
        fieldChildren={state.segments.map((segment, i) => (
          <Segment key={i} segment={segment} state={state} />
        ))}
      />
    </Field>
  );
}

const _TimeField = forwardRef(TimeField);
export { _TimeField as TimeField };
