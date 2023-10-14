import { forwardRef } from 'react';
import { Field, TextFieldProps, TextInput, useFallbackProps, useFallbackRef } from '#/lib';
import { mergeProps, useTextField } from 'react-aria';

function TextField(props: TextFieldProps, ref: any) {
  const inputRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { inputProps, ...otherProps } = useTextField(fallbackProps, inputRef);

  return (
    <Field {...mergeProps(fallbackProps, otherProps)}>
      <TextInput ref={inputRef} inputProps={inputProps} {...fallbackProps} />
    </Field>
  );
}

const _TextField = forwardRef(TextField);
export { _TextField as TextField };
