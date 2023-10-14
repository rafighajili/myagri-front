import { forwardRef } from 'react';
import { Field, SearchFieldProps, TextInput, useFallbackProps, useFallbackRef } from '#/lib';
import { mergeProps, useSearchField } from 'react-aria';
import { useSearchFieldState } from 'react-stately';
import { Search, X } from 'tabler-icons-react';
import clsx from 'clsx';
import styles from './search-field.module.css';
import { FieldButton } from '#/lib/field/field-button';

function SearchField(props: SearchFieldProps, ref: any) {
  const inputRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { startIcon = <Search />, endIcon, validationState } = props;
  const state = useSearchFieldState(fallbackProps);
  const { inputProps, clearButtonProps, ...otherProps } = useSearchField(fallbackProps, state, inputRef);

  const hasEndIcon = !!endIcon;
  const hasValidationState = !!validationState;

  return (
    <Field {...mergeProps(props, otherProps)}>
      <TextInput
        ref={inputRef}
        inputProps={inputProps}
        {...props}
        startIcon={startIcon}
        fieldClassName={clsx(styles['input-base'], {
          [styles['has-end-icon']]: hasEndIcon,
          [styles['has-validation-state']]: hasValidationState,
        })}
      >
        {!!state.value && (
          <FieldButton {...clearButtonProps} className={styles.button}>
            <X />
          </FieldButton>
        )}
      </TextInput>
    </Field>
  );
}

const _SearchField = forwardRef(SearchField);
export { _SearchField as SearchField };
